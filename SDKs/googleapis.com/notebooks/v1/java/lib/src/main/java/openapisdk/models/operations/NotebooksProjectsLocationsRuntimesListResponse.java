package openapisdk.models.operations;



public class NotebooksProjectsLocationsRuntimesListResponse {
    public String contentType;
    public NotebooksProjectsLocationsRuntimesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRuntimesResponse listRuntimesResponse;
    public NotebooksProjectsLocationsRuntimesListResponse withListRuntimesResponse(openapisdk.models.shared.ListRuntimesResponse listRuntimesResponse) {
        this.listRuntimesResponse = listRuntimesResponse;
        return this;
    }
    public Long statusCode;
    public NotebooksProjectsLocationsRuntimesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}