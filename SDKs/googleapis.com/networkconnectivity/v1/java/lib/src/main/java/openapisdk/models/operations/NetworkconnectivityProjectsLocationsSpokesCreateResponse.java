package openapisdk.models.operations;



public class NetworkconnectivityProjectsLocationsSpokesCreateResponse {
    public String contentType;
    public NetworkconnectivityProjectsLocationsSpokesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public NetworkconnectivityProjectsLocationsSpokesCreateResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public NetworkconnectivityProjectsLocationsSpokesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}