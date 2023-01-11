package openapisdk.models.operations;



public class VideointelligenceOperationsProjectsLocationsOperationsGetResponse {
    public String contentType;
    public VideointelligenceOperationsProjectsLocationsOperationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public VideointelligenceOperationsProjectsLocationsOperationsGetResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public VideointelligenceOperationsProjectsLocationsOperationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}