package openapisdk.models.operations;



public class FetchServiceConversationMessageResponse {
    public String contentType;
    public FetchServiceConversationMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchServiceConversationMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationMessage conversationsV1ServiceServiceConversationServiceConversationMessage;
    public FetchServiceConversationMessageResponse withConversationsV1ServiceServiceConversationServiceConversationMessage(openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationMessage conversationsV1ServiceServiceConversationServiceConversationMessage) {
        this.conversationsV1ServiceServiceConversationServiceConversationMessage = conversationsV1ServiceServiceConversationServiceConversationMessage;
        return this;
    }
}