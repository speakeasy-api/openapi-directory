package openapisdk.models.operations;



public class ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse {
    public String contentType;
    public ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}