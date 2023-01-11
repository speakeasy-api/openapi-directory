package openapisdk.models.operations;



public class ListServiceUserConversationResponse {
    public String contentType;
    public ListServiceUserConversationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListServiceUserConversationListServiceUserConversationResponse listServiceUserConversationResponse;
    public ListServiceUserConversationResponse withListServiceUserConversationResponse(ListServiceUserConversationListServiceUserConversationResponse listServiceUserConversationResponse) {
        this.listServiceUserConversationResponse = listServiceUserConversationResponse;
        return this;
    }
    public Long statusCode;
    public ListServiceUserConversationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}