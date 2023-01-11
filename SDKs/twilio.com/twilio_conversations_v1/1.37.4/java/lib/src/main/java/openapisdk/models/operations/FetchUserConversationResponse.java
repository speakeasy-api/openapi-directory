package openapisdk.models.operations;



public class FetchUserConversationResponse {
    public String contentType;
    public FetchUserConversationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUserConversationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1UserUserConversation conversationsV1UserUserConversation;
    public FetchUserConversationResponse withConversationsV1UserUserConversation(openapisdk.models.shared.ConversationsV1UserUserConversation conversationsV1UserUserConversation) {
        this.conversationsV1UserUserConversation = conversationsV1UserUserConversation;
        return this;
    }
}