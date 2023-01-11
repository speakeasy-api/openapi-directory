package openapisdk.models.operations;



public class NetworkconnectivityProjectsLocationsSpokesPatchResponse {
    public String contentType;
    public NetworkconnectivityProjectsLocationsSpokesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public NetworkconnectivityProjectsLocationsSpokesPatchResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public NetworkconnectivityProjectsLocationsSpokesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}