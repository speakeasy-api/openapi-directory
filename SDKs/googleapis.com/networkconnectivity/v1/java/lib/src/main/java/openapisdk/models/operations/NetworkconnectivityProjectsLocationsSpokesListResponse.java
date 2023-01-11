package openapisdk.models.operations;



public class NetworkconnectivityProjectsLocationsSpokesListResponse {
    public String contentType;
    public NetworkconnectivityProjectsLocationsSpokesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSpokesResponse listSpokesResponse;
    public NetworkconnectivityProjectsLocationsSpokesListResponse withListSpokesResponse(openapisdk.models.shared.ListSpokesResponse listSpokesResponse) {
        this.listSpokesResponse = listSpokesResponse;
        return this;
    }
    public Long statusCode;
    public NetworkconnectivityProjectsLocationsSpokesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}