package openapisdk.models.operations;



public class ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse {
    public String contentType;
    public ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}