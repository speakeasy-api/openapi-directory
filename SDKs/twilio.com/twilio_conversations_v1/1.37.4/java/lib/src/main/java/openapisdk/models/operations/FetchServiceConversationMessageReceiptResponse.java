package openapisdk.models.operations;



public class FetchServiceConversationMessageReceiptResponse {
    public String contentType;
    public FetchServiceConversationMessageReceiptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchServiceConversationMessageReceiptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt conversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt;
    public FetchServiceConversationMessageReceiptResponse withConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt(openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt conversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt) {
        this.conversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt = conversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt;
        return this;
    }
}