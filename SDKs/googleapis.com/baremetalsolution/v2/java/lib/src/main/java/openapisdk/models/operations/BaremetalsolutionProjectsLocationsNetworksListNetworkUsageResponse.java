package openapisdk.models.operations;



public class BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse {
    public String contentType;
    public BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListNetworkUsageResponse listNetworkUsageResponse;
    public BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse withListNetworkUsageResponse(openapisdk.models.shared.ListNetworkUsageResponse listNetworkUsageResponse) {
        this.listNetworkUsageResponse = listNetworkUsageResponse;
        return this;
    }
    public Long statusCode;
    public BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}