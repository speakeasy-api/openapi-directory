package openapisdk.models.operations;



public class ListConversationResponse {
    public String contentType;
    public ListConversationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListConversationListConversationResponse listConversationResponse;
    public ListConversationResponse withListConversationResponse(ListConversationListConversationResponse listConversationResponse) {
        this.listConversationResponse = listConversationResponse;
        return this;
    }
    public Long statusCode;
    public ListConversationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}