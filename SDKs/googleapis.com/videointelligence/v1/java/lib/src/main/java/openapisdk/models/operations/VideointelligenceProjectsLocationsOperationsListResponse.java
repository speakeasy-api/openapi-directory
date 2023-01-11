package openapisdk.models.operations;



public class VideointelligenceProjectsLocationsOperationsListResponse {
    public String contentType;
    public VideointelligenceProjectsLocationsOperationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningListOperationsResponse googleLongrunningListOperationsResponse;
    public VideointelligenceProjectsLocationsOperationsListResponse withGoogleLongrunningListOperationsResponse(openapisdk.models.shared.GoogleLongrunningListOperationsResponse googleLongrunningListOperationsResponse) {
        this.googleLongrunningListOperationsResponse = googleLongrunningListOperationsResponse;
        return this;
    }
    public Long statusCode;
    public VideointelligenceProjectsLocationsOperationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}