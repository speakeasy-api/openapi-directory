package openapisdk.models.operations;



public class LibraryagentShelvesBooksBorrowResponse {
    public String contentType;
    public LibraryagentShelvesBooksBorrowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleExampleLibraryagentV1Book googleExampleLibraryagentV1Book;
    public LibraryagentShelvesBooksBorrowResponse withGoogleExampleLibraryagentV1Book(openapisdk.models.shared.GoogleExampleLibraryagentV1Book googleExampleLibraryagentV1Book) {
        this.googleExampleLibraryagentV1Book = googleExampleLibraryagentV1Book;
        return this;
    }
    public Long statusCode;
    public LibraryagentShelvesBooksBorrowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}