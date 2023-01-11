package openapisdk.models.operations;



public class ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse {
    public String contentType;
    public ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}