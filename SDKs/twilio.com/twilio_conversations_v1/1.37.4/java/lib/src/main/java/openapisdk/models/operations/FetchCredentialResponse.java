package openapisdk.models.operations;



public class FetchCredentialResponse {
    public String contentType;
    public FetchCredentialResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchCredentialResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1Credential conversationsV1Credential;
    public FetchCredentialResponse withConversationsV1Credential(openapisdk.models.shared.ConversationsV1Credential conversationsV1Credential) {
        this.conversationsV1Credential = conversationsV1Credential;
        return this;
    }
}