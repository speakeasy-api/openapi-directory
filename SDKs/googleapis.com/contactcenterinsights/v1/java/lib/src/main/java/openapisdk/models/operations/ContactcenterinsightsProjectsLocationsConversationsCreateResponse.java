package openapisdk.models.operations;



public class ContactcenterinsightsProjectsLocationsConversationsCreateResponse {
    public String contentType;
    public ContactcenterinsightsProjectsLocationsConversationsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudContactcenterinsightsV1Conversation googleCloudContactcenterinsightsV1Conversation;
    public ContactcenterinsightsProjectsLocationsConversationsCreateResponse withGoogleCloudContactcenterinsightsV1Conversation(openapisdk.models.shared.GoogleCloudContactcenterinsightsV1Conversation googleCloudContactcenterinsightsV1Conversation) {
        this.googleCloudContactcenterinsightsV1Conversation = googleCloudContactcenterinsightsV1Conversation;
        return this;
    }
    public Long statusCode;
    public ContactcenterinsightsProjectsLocationsConversationsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}