package openapisdk.models.operations;



public class NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalResponse {
    public String contentType;
    public NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RefreshRuntimeTokenInternalResponse refreshRuntimeTokenInternalResponse;
    public NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalResponse withRefreshRuntimeTokenInternalResponse(openapisdk.models.shared.RefreshRuntimeTokenInternalResponse refreshRuntimeTokenInternalResponse) {
        this.refreshRuntimeTokenInternalResponse = refreshRuntimeTokenInternalResponse;
        return this;
    }
    public Long statusCode;
    public NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}