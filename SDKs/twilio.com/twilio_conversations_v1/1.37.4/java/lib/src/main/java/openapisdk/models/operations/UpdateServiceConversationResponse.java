package openapisdk.models.operations;



public class UpdateServiceConversationResponse {
    public String contentType;
    public UpdateServiceConversationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateServiceConversationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceConversation conversationsV1ServiceServiceConversation;
    public UpdateServiceConversationResponse withConversationsV1ServiceServiceConversation(openapisdk.models.shared.ConversationsV1ServiceServiceConversation conversationsV1ServiceServiceConversation) {
        this.conversationsV1ServiceServiceConversation = conversationsV1ServiceServiceConversation;
        return this;
    }
}