package openapisdk.models.operations;



public class PolicysimulatorProjectsLocationsReplaysCreateResponse {
    public String contentType;
    public PolicysimulatorProjectsLocationsReplaysCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public PolicysimulatorProjectsLocationsReplaysCreateResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public PolicysimulatorProjectsLocationsReplaysCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}