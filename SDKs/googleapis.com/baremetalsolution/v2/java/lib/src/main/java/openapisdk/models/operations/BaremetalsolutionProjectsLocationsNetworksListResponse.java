package openapisdk.models.operations;



public class BaremetalsolutionProjectsLocationsNetworksListResponse {
    public String contentType;
    public BaremetalsolutionProjectsLocationsNetworksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListNetworksResponse listNetworksResponse;
    public BaremetalsolutionProjectsLocationsNetworksListResponse withListNetworksResponse(openapisdk.models.shared.ListNetworksResponse listNetworksResponse) {
        this.listNetworksResponse = listNetworksResponse;
        return this;
    }
    public Long statusCode;
    public BaremetalsolutionProjectsLocationsNetworksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}