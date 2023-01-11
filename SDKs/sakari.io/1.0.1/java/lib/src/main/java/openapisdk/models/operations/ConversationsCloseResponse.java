package openapisdk.models.operations;



public class ConversationsCloseResponse {
    public String contentType;
    public ConversationsCloseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ConversationResponse conversationResponse;
    public ConversationsCloseResponse withConversationResponse(openapisdk.models.shared.ConversationResponse conversationResponse) {
        this.conversationResponse = conversationResponse;
        return this;
    }
    public Long statusCode;
    public ConversationsCloseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}