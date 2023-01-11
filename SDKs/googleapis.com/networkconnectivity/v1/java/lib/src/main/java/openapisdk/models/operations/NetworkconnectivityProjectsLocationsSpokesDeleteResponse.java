package openapisdk.models.operations;



public class NetworkconnectivityProjectsLocationsSpokesDeleteResponse {
    public String contentType;
    public NetworkconnectivityProjectsLocationsSpokesDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public NetworkconnectivityProjectsLocationsSpokesDeleteResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public NetworkconnectivityProjectsLocationsSpokesDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}