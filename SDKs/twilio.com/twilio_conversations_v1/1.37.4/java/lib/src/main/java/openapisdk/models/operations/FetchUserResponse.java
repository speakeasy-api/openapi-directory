package openapisdk.models.operations;



public class FetchUserResponse {
    public String contentType;
    public FetchUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1User conversationsV1User;
    public FetchUserResponse withConversationsV1User(openapisdk.models.shared.ConversationsV1User conversationsV1User) {
        this.conversationsV1User = conversationsV1User;
        return this;
    }
}