package openapisdk.models.operations;



public class AppengineAppsServicesVersionsInstancesListResponse {
    public String contentType;
    public AppengineAppsServicesVersionsInstancesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListInstancesResponse listInstancesResponse;
    public AppengineAppsServicesVersionsInstancesListResponse withListInstancesResponse(openapisdk.models.shared.ListInstancesResponse listInstancesResponse) {
        this.listInstancesResponse = listInstancesResponse;
        return this;
    }
    public Long statusCode;
    public AppengineAppsServicesVersionsInstancesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}