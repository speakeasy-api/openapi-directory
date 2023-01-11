package openapisdk.models.operations;



public class FetchServiceUserConversationResponse {
    public String contentType;
    public FetchServiceUserConversationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchServiceUserConversationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceUserServiceUserConversation conversationsV1ServiceServiceUserServiceUserConversation;
    public FetchServiceUserConversationResponse withConversationsV1ServiceServiceUserServiceUserConversation(openapisdk.models.shared.ConversationsV1ServiceServiceUserServiceUserConversation conversationsV1ServiceServiceUserServiceUserConversation) {
        this.conversationsV1ServiceServiceUserServiceUserConversation = conversationsV1ServiceServiceUserServiceUserConversation;
        return this;
    }
}