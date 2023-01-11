package openapisdk.models.operations;



public class ListConversationMessageReceiptResponse {
    public String contentType;
    public ListConversationMessageReceiptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListConversationMessageReceiptListConversationMessageReceiptResponse listConversationMessageReceiptResponse;
    public ListConversationMessageReceiptResponse withListConversationMessageReceiptResponse(ListConversationMessageReceiptListConversationMessageReceiptResponse listConversationMessageReceiptResponse) {
        this.listConversationMessageReceiptResponse = listConversationMessageReceiptResponse;
        return this;
    }
    public Long statusCode;
    public ListConversationMessageReceiptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}