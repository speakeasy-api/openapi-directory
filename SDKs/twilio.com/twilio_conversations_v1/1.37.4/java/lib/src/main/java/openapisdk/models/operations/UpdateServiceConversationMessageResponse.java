package openapisdk.models.operations;



public class UpdateServiceConversationMessageResponse {
    public String contentType;
    public UpdateServiceConversationMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateServiceConversationMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationMessage conversationsV1ServiceServiceConversationServiceConversationMessage;
    public UpdateServiceConversationMessageResponse withConversationsV1ServiceServiceConversationServiceConversationMessage(openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationMessage conversationsV1ServiceServiceConversationServiceConversationMessage) {
        this.conversationsV1ServiceServiceConversationServiceConversationMessage = conversationsV1ServiceServiceConversationServiceConversationMessage;
        return this;
    }
}