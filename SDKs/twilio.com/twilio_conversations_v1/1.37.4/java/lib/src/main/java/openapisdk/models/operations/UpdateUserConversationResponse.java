package openapisdk.models.operations;



public class UpdateUserConversationResponse {
    public String contentType;
    public UpdateUserConversationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUserConversationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1UserUserConversation conversationsV1UserUserConversation;
    public UpdateUserConversationResponse withConversationsV1UserUserConversation(openapisdk.models.shared.ConversationsV1UserUserConversation conversationsV1UserUserConversation) {
        this.conversationsV1UserUserConversation = conversationsV1UserUserConversation;
        return this;
    }
}