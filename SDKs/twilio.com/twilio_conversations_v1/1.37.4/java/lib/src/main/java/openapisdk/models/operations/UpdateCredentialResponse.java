package openapisdk.models.operations;



public class UpdateCredentialResponse {
    public String contentType;
    public UpdateCredentialResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateCredentialResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1Credential conversationsV1Credential;
    public UpdateCredentialResponse withConversationsV1Credential(openapisdk.models.shared.ConversationsV1Credential conversationsV1Credential) {
        this.conversationsV1Credential = conversationsV1Credential;
        return this;
    }
}