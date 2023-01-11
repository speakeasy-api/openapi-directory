package openapisdk.models.operations;



public class NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse {
    public String contentType;
    public NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}