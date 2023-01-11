package openapisdk.models.operations;



public class FetchServiceConversationResponse {
    public String contentType;
    public FetchServiceConversationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchServiceConversationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceConversation conversationsV1ServiceServiceConversation;
    public FetchServiceConversationResponse withConversationsV1ServiceServiceConversation(openapisdk.models.shared.ConversationsV1ServiceServiceConversation conversationsV1ServiceServiceConversation) {
        this.conversationsV1ServiceServiceConversation = conversationsV1ServiceServiceConversation;
        return this;
    }
}