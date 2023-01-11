package openapisdk.models.operations;



public class ContactcenterinsightsProjectsLocationsOperationsListResponse {
    public String contentType;
    public ContactcenterinsightsProjectsLocationsOperationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningListOperationsResponse googleLongrunningListOperationsResponse;
    public ContactcenterinsightsProjectsLocationsOperationsListResponse withGoogleLongrunningListOperationsResponse(openapisdk.models.shared.GoogleLongrunningListOperationsResponse googleLongrunningListOperationsResponse) {
        this.googleLongrunningListOperationsResponse = googleLongrunningListOperationsResponse;
        return this;
    }
    public Long statusCode;
    public ContactcenterinsightsProjectsLocationsOperationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}