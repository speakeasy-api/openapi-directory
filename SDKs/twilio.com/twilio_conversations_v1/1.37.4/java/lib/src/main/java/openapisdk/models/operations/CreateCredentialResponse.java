package openapisdk.models.operations;



public class CreateCredentialResponse {
    public String contentType;
    public CreateCredentialResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCredentialResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1Credential conversationsV1Credential;
    public CreateCredentialResponse withConversationsV1Credential(openapisdk.models.shared.ConversationsV1Credential conversationsV1Credential) {
        this.conversationsV1Credential = conversationsV1Credential;
        return this;
    }
}