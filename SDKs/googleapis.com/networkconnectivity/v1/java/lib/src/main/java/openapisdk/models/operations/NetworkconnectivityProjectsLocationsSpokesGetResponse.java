package openapisdk.models.operations;



public class NetworkconnectivityProjectsLocationsSpokesGetResponse {
    public String contentType;
    public NetworkconnectivityProjectsLocationsSpokesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Spoke spoke;
    public NetworkconnectivityProjectsLocationsSpokesGetResponse withSpoke(openapisdk.models.shared.Spoke spoke) {
        this.spoke = spoke;
        return this;
    }
    public Long statusCode;
    public NetworkconnectivityProjectsLocationsSpokesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}