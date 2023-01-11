package openapisdk.models.operations;



public class ListConversationMessageResponse {
    public String contentType;
    public ListConversationMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListConversationMessageListConversationMessageResponse listConversationMessageResponse;
    public ListConversationMessageResponse withListConversationMessageResponse(ListConversationMessageListConversationMessageResponse listConversationMessageResponse) {
        this.listConversationMessageResponse = listConversationMessageResponse;
        return this;
    }
    public Long statusCode;
    public ListConversationMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}