package openapisdk.models.operations;



public class AppengineAppsServicesVersionsListResponse {
    public String contentType;
    public AppengineAppsServicesVersionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListVersionsResponse listVersionsResponse;
    public AppengineAppsServicesVersionsListResponse withListVersionsResponse(openapisdk.models.shared.ListVersionsResponse listVersionsResponse) {
        this.listVersionsResponse = listVersionsResponse;
        return this;
    }
    public Long statusCode;
    public AppengineAppsServicesVersionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}