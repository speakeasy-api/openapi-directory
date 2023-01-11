package openapisdk.models.operations;



public class NetworkconnectivityProjectsLocationsGlobalHubsListResponse {
    public String contentType;
    public NetworkconnectivityProjectsLocationsGlobalHubsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListHubsResponse listHubsResponse;
    public NetworkconnectivityProjectsLocationsGlobalHubsListResponse withListHubsResponse(openapisdk.models.shared.ListHubsResponse listHubsResponse) {
        this.listHubsResponse = listHubsResponse;
        return this;
    }
    public Long statusCode;
    public NetworkconnectivityProjectsLocationsGlobalHubsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}