package openapisdk.models.operations;



public class RunProjectsLocationsServicesRevisionsDeleteResponse {
    public String contentType;
    public RunProjectsLocationsServicesRevisionsDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public RunProjectsLocationsServicesRevisionsDeleteResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsServicesRevisionsDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}