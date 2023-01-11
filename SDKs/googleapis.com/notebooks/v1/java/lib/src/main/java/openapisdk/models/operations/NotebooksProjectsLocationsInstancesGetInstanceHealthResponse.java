package openapisdk.models.operations;



public class NotebooksProjectsLocationsInstancesGetInstanceHealthResponse {
    public String contentType;
    public NotebooksProjectsLocationsInstancesGetInstanceHealthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInstanceHealthResponse getInstanceHealthResponse;
    public NotebooksProjectsLocationsInstancesGetInstanceHealthResponse withGetInstanceHealthResponse(openapisdk.models.shared.GetInstanceHealthResponse getInstanceHealthResponse) {
        this.getInstanceHealthResponse = getInstanceHealthResponse;
        return this;
    }
    public Long statusCode;
    public NotebooksProjectsLocationsInstancesGetInstanceHealthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}