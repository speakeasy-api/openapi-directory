package openapisdk.models.operations;



public class LibraryagentShelvesBooksListResponse {
    public String contentType;
    public LibraryagentShelvesBooksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleExampleLibraryagentV1ListBooksResponse googleExampleLibraryagentV1ListBooksResponse;
    public LibraryagentShelvesBooksListResponse withGoogleExampleLibraryagentV1ListBooksResponse(openapisdk.models.shared.GoogleExampleLibraryagentV1ListBooksResponse googleExampleLibraryagentV1ListBooksResponse) {
        this.googleExampleLibraryagentV1ListBooksResponse = googleExampleLibraryagentV1ListBooksResponse;
        return this;
    }
    public Long statusCode;
    public LibraryagentShelvesBooksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}