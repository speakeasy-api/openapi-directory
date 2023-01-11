package openapisdk.models.operations;



public class CreateConversationResponse {
    public String contentType;
    public CreateConversationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateConversationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1Conversation conversationsV1Conversation;
    public CreateConversationResponse withConversationsV1Conversation(openapisdk.models.shared.ConversationsV1Conversation conversationsV1Conversation) {
        this.conversationsV1Conversation = conversationsV1Conversation;
        return this;
    }
}