package openapisdk.models.operations;



public class RunProjectsLocationsJobsRunResponse {
    public String contentType;
    public RunProjectsLocationsJobsRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public RunProjectsLocationsJobsRunResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsJobsRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}