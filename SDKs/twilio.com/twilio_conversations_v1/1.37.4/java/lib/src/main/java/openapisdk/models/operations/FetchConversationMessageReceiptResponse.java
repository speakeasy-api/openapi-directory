package openapisdk.models.operations;



public class FetchConversationMessageReceiptResponse {
    public String contentType;
    public FetchConversationMessageReceiptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchConversationMessageReceiptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ConversationConversationMessageConversationMessageReceipt conversationsV1ConversationConversationMessageConversationMessageReceipt;
    public FetchConversationMessageReceiptResponse withConversationsV1ConversationConversationMessageConversationMessageReceipt(openapisdk.models.shared.ConversationsV1ConversationConversationMessageConversationMessageReceipt conversationsV1ConversationConversationMessageConversationMessageReceipt) {
        this.conversationsV1ConversationConversationMessageConversationMessageReceipt = conversationsV1ConversationConversationMessageConversationMessageReceipt;
        return this;
    }
}