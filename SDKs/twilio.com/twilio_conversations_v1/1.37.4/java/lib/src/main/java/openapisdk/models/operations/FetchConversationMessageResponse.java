package openapisdk.models.operations;



public class FetchConversationMessageResponse {
    public String contentType;
    public FetchConversationMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchConversationMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ConversationConversationMessage conversationsV1ConversationConversationMessage;
    public FetchConversationMessageResponse withConversationsV1ConversationConversationMessage(openapisdk.models.shared.ConversationsV1ConversationConversationMessage conversationsV1ConversationConversationMessage) {
        this.conversationsV1ConversationConversationMessage = conversationsV1ConversationConversationMessage;
        return this;
    }
}