package openapisdk.models.operations;



public class NetworkmanagementProjectsLocationsGlobalConnectivityTestsListResponse {
    public String contentType;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListConnectivityTestsResponse listConnectivityTestsResponse;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsListResponse withListConnectivityTestsResponse(openapisdk.models.shared.ListConnectivityTestsResponse listConnectivityTestsResponse) {
        this.listConnectivityTestsResponse = listConnectivityTestsResponse;
        return this;
    }
    public Long statusCode;
    public NetworkmanagementProjectsLocationsGlobalConnectivityTestsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}