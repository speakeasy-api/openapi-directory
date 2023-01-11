package openapisdk.models.operations;



public class ListServiceConversationMessageResponse {
    public String contentType;
    public ListServiceConversationMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListServiceConversationMessageListServiceConversationMessageResponse listServiceConversationMessageResponse;
    public ListServiceConversationMessageResponse withListServiceConversationMessageResponse(ListServiceConversationMessageListServiceConversationMessageResponse listServiceConversationMessageResponse) {
        this.listServiceConversationMessageResponse = listServiceConversationMessageResponse;
        return this;
    }
    public Long statusCode;
    public ListServiceConversationMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}