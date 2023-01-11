package openapisdk.models.operations;



public class ContactcenterinsightsProjectsLocationsConversationsIngestResponse {
    public String contentType;
    public ContactcenterinsightsProjectsLocationsConversationsIngestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public ContactcenterinsightsProjectsLocationsConversationsIngestResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public ContactcenterinsightsProjectsLocationsConversationsIngestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}