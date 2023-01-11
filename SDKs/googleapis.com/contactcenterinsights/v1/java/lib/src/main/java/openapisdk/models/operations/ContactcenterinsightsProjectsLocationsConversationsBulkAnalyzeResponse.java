package openapisdk.models.operations;



public class ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse {
    public String contentType;
    public ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}