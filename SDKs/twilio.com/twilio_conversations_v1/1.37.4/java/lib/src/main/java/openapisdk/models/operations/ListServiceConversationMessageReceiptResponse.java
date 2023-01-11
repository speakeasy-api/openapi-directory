package openapisdk.models.operations;



public class ListServiceConversationMessageReceiptResponse {
    public String contentType;
    public ListServiceConversationMessageReceiptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse listServiceConversationMessageReceiptResponse;
    public ListServiceConversationMessageReceiptResponse withListServiceConversationMessageReceiptResponse(ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse listServiceConversationMessageReceiptResponse) {
        this.listServiceConversationMessageReceiptResponse = listServiceConversationMessageReceiptResponse;
        return this;
    }
    public Long statusCode;
    public ListServiceConversationMessageReceiptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}