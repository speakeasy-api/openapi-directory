package openapisdk.models.operations;



public class LibraryagentShelvesBooksReturnResponse {
    public String contentType;
    public LibraryagentShelvesBooksReturnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleExampleLibraryagentV1Book googleExampleLibraryagentV1Book;
    public LibraryagentShelvesBooksReturnResponse withGoogleExampleLibraryagentV1Book(openapisdk.models.shared.GoogleExampleLibraryagentV1Book googleExampleLibraryagentV1Book) {
        this.googleExampleLibraryagentV1Book = googleExampleLibraryagentV1Book;
        return this;
    }
    public Long statusCode;
    public LibraryagentShelvesBooksReturnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}