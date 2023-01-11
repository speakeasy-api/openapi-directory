package openapisdk.models.operations;



public class VideointelligenceProjectsLocationsOperationsGetResponse {
    public String contentType;
    public VideointelligenceProjectsLocationsOperationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public VideointelligenceProjectsLocationsOperationsGetResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public VideointelligenceProjectsLocationsOperationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}