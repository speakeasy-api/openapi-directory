package openapisdk.models.operations;



public class NetworkconnectivityProjectsLocationsInternalRangesCreateResponse {
    public String contentType;
    public NetworkconnectivityProjectsLocationsInternalRangesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public NetworkconnectivityProjectsLocationsInternalRangesCreateResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public NetworkconnectivityProjectsLocationsInternalRangesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}