package openapisdk.models.operations;



public class CreateServiceConversationResponse {
    public String contentType;
    public CreateServiceConversationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateServiceConversationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceConversation conversationsV1ServiceServiceConversation;
    public CreateServiceConversationResponse withConversationsV1ServiceServiceConversation(openapisdk.models.shared.ConversationsV1ServiceServiceConversation conversationsV1ServiceServiceConversation) {
        this.conversationsV1ServiceServiceConversation = conversationsV1ServiceServiceConversation;
        return this;
    }
}