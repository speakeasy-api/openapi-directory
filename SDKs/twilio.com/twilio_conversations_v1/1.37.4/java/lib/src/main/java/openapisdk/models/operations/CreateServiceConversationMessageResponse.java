package openapisdk.models.operations;



public class CreateServiceConversationMessageResponse {
    public String contentType;
    public CreateServiceConversationMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateServiceConversationMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationMessage conversationsV1ServiceServiceConversationServiceConversationMessage;
    public CreateServiceConversationMessageResponse withConversationsV1ServiceServiceConversationServiceConversationMessage(openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationMessage conversationsV1ServiceServiceConversationServiceConversationMessage) {
        this.conversationsV1ServiceServiceConversationServiceConversationMessage = conversationsV1ServiceServiceConversationServiceConversationMessage;
        return this;
    }
}