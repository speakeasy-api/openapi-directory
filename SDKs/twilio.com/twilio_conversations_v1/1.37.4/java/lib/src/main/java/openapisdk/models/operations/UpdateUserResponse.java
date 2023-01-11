package openapisdk.models.operations;



public class UpdateUserResponse {
    public String contentType;
    public UpdateUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1User conversationsV1User;
    public UpdateUserResponse withConversationsV1User(openapisdk.models.shared.ConversationsV1User conversationsV1User) {
        this.conversationsV1User = conversationsV1User;
        return this;
    }
}