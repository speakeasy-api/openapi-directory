package openapisdk.models.operations;



public class CreateConversationMessageResponse {
    public String contentType;
    public CreateConversationMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateConversationMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ConversationConversationMessage conversationsV1ConversationConversationMessage;
    public CreateConversationMessageResponse withConversationsV1ConversationConversationMessage(openapisdk.models.shared.ConversationsV1ConversationConversationMessage conversationsV1ConversationConversationMessage) {
        this.conversationsV1ConversationConversationMessage = conversationsV1ConversationConversationMessage;
        return this;
    }
}