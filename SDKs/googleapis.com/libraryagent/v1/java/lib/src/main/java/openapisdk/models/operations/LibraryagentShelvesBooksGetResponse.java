package openapisdk.models.operations;



public class LibraryagentShelvesBooksGetResponse {
    public String contentType;
    public LibraryagentShelvesBooksGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleExampleLibraryagentV1Book googleExampleLibraryagentV1Book;
    public LibraryagentShelvesBooksGetResponse withGoogleExampleLibraryagentV1Book(openapisdk.models.shared.GoogleExampleLibraryagentV1Book googleExampleLibraryagentV1Book) {
        this.googleExampleLibraryagentV1Book = googleExampleLibraryagentV1Book;
        return this;
    }
    public Long statusCode;
    public LibraryagentShelvesBooksGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}