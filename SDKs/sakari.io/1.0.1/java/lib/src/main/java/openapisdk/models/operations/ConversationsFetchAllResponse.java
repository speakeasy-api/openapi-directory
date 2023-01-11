package openapisdk.models.operations;



public class ConversationsFetchAllResponse {
    public String contentType;
    public ConversationsFetchAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ConversationsResponse conversationsResponse;
    public ConversationsFetchAllResponse withConversationsResponse(openapisdk.models.shared.ConversationsResponse conversationsResponse) {
        this.conversationsResponse = conversationsResponse;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public ConversationsFetchAllResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public ConversationsFetchAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}