package openapisdk.models.operations;



public class EventarcProjectsLocationsOperationsListResponse {
    public String contentType;
    public EventarcProjectsLocationsOperationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningListOperationsResponse googleLongrunningListOperationsResponse;
    public EventarcProjectsLocationsOperationsListResponse withGoogleLongrunningListOperationsResponse(openapisdk.models.shared.GoogleLongrunningListOperationsResponse googleLongrunningListOperationsResponse) {
        this.googleLongrunningListOperationsResponse = googleLongrunningListOperationsResponse;
        return this;
    }
    public Long statusCode;
    public EventarcProjectsLocationsOperationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}