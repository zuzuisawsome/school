
function showPage(pageName) {
    let pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById(pageName).classList.add("active");
}

function sendMessage(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("response").textContent =
        "Thanks, " + name + "! Your message was entered successfully.";

    event.target.reset();
}
