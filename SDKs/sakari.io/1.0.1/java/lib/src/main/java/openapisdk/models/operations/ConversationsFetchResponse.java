package openapisdk.models.operations;



public class ConversationsFetchResponse {
    public String contentType;
    public ConversationsFetchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ConversationResponse conversationResponse;
    public ConversationsFetchResponse withConversationResponse(openapisdk.models.shared.ConversationResponse conversationResponse) {
        this.conversationResponse = conversationResponse;
        return this;
    }
    public Long statusCode;
    public ConversationsFetchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}