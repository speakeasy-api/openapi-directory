package openapisdk.models.operations;



public class CreateUserResponse {
    public String contentType;
    public CreateUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1User conversationsV1User;
    public CreateUserResponse withConversationsV1User(openapisdk.models.shared.ConversationsV1User conversationsV1User) {
        this.conversationsV1User = conversationsV1User;
        return this;
    }
}