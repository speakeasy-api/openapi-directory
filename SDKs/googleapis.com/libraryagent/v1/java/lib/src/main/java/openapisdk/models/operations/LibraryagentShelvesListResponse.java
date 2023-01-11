package openapisdk.models.operations;



public class LibraryagentShelvesListResponse {
    public String contentType;
    public LibraryagentShelvesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleExampleLibraryagentV1ListShelvesResponse googleExampleLibraryagentV1ListShelvesResponse;
    public LibraryagentShelvesListResponse withGoogleExampleLibraryagentV1ListShelvesResponse(openapisdk.models.shared.GoogleExampleLibraryagentV1ListShelvesResponse googleExampleLibraryagentV1ListShelvesResponse) {
        this.googleExampleLibraryagentV1ListShelvesResponse = googleExampleLibraryagentV1ListShelvesResponse;
        return this;
    }
    public Long statusCode;
    public LibraryagentShelvesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}