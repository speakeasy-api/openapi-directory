package openapisdk.models.operations;



public class NotebooksProjectsLocationsExecutionsListResponse {
    public String contentType;
    public NotebooksProjectsLocationsExecutionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListExecutionsResponse listExecutionsResponse;
    public NotebooksProjectsLocationsExecutionsListResponse withListExecutionsResponse(openapisdk.models.shared.ListExecutionsResponse listExecutionsResponse) {
        this.listExecutionsResponse = listExecutionsResponse;
        return this;
    }
    public Long statusCode;
    public NotebooksProjectsLocationsExecutionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}