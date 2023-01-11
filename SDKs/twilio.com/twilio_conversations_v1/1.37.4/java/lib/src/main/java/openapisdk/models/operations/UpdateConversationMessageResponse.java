package openapisdk.models.operations;



public class UpdateConversationMessageResponse {
    public String contentType;
    public UpdateConversationMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateConversationMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ConversationConversationMessage conversationsV1ConversationConversationMessage;
    public UpdateConversationMessageResponse withConversationsV1ConversationConversationMessage(openapisdk.models.shared.ConversationsV1ConversationConversationMessage conversationsV1ConversationConversationMessage) {
        this.conversationsV1ConversationConversationMessage = conversationsV1ConversationConversationMessage;
        return this;
    }
}