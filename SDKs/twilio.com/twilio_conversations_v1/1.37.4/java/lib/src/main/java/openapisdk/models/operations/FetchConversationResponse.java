package openapisdk.models.operations;



public class FetchConversationResponse {
    public String contentType;
    public FetchConversationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchConversationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1Conversation conversationsV1Conversation;
    public FetchConversationResponse withConversationsV1Conversation(openapisdk.models.shared.ConversationsV1Conversation conversationsV1Conversation) {
        this.conversationsV1Conversation = conversationsV1Conversation;
        return this;
    }
}