package openapisdk.models.operations;



public class NetworkmanagementProjectsLocationsGlobalOperationsListResponse {
    public String contentType;
    public NetworkmanagementProjectsLocationsGlobalOperationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListOperationsResponse listOperationsResponse;
    public NetworkmanagementProjectsLocationsGlobalOperationsListResponse withListOperationsResponse(openapisdk.models.shared.ListOperationsResponse listOperationsResponse) {
        this.listOperationsResponse = listOperationsResponse;
        return this;
    }
    public Long statusCode;
    public NetworkmanagementProjectsLocationsGlobalOperationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}