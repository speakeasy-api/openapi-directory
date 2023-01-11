package openapisdk.models.operations;



public class UpdateConversationResponse {
    public String contentType;
    public UpdateConversationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateConversationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1Conversation conversationsV1Conversation;
    public UpdateConversationResponse withConversationsV1Conversation(openapisdk.models.shared.ConversationsV1Conversation conversationsV1Conversation) {
        this.conversationsV1Conversation = conversationsV1Conversation;
        return this;
    }
}