package openapisdk.models.operations;



public class AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse {
    public String contentType;
    public AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}