package openapisdk.models.operations;



public class UpdateServiceUserConversationResponse {
    public String contentType;
    public UpdateServiceUserConversationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateServiceUserConversationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceUserServiceUserConversation conversationsV1ServiceServiceUserServiceUserConversation;
    public UpdateServiceUserConversationResponse withConversationsV1ServiceServiceUserServiceUserConversation(openapisdk.models.shared.ConversationsV1ServiceServiceUserServiceUserConversation conversationsV1ServiceServiceUserServiceUserConversation) {
        this.conversationsV1ServiceServiceUserServiceUserConversation = conversationsV1ServiceServiceUserServiceUserConversation;
        return this;
    }
}