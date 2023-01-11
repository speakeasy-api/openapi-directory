package openapisdk.models.operations;



public class ListUserConversationResponse {
    public String contentType;
    public ListUserConversationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListUserConversationListUserConversationResponse listUserConversationResponse;
    public ListUserConversationResponse withListUserConversationResponse(ListUserConversationListUserConversationResponse listUserConversationResponse) {
        this.listUserConversationResponse = listUserConversationResponse;
        return this;
    }
    public Long statusCode;
    public ListUserConversationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}