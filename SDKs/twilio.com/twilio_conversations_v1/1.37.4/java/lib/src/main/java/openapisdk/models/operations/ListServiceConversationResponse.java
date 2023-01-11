package openapisdk.models.operations;



public class ListServiceConversationResponse {
    public String contentType;
    public ListServiceConversationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListServiceConversationListServiceConversationResponse listServiceConversationResponse;
    public ListServiceConversationResponse withListServiceConversationResponse(ListServiceConversationListServiceConversationResponse listServiceConversationResponse) {
        this.listServiceConversationResponse = listServiceConversationResponse;
        return this;
    }
    public Long statusCode;
    public ListServiceConversationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}