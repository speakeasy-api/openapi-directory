package openapisdk.models.operations;



public class PolicysimulatorProjectsLocationsReplaysOperationsListResponse {
    public String contentType;
    public PolicysimulatorProjectsLocationsReplaysOperationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningListOperationsResponse googleLongrunningListOperationsResponse;
    public PolicysimulatorProjectsLocationsReplaysOperationsListResponse withGoogleLongrunningListOperationsResponse(openapisdk.models.shared.GoogleLongrunningListOperationsResponse googleLongrunningListOperationsResponse) {
        this.googleLongrunningListOperationsResponse = googleLongrunningListOperationsResponse;
        return this;
    }
    public Long statusCode;
    public PolicysimulatorProjectsLocationsReplaysOperationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}