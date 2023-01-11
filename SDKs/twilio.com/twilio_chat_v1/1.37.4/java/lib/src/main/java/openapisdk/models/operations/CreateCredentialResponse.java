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
    public openapisdk.models.shared.ChatV1Credential chatV1Credential;
    public CreateCredentialResponse withChatV1Credential(openapisdk.models.shared.ChatV1Credential chatV1Credential) {
        this.chatV1Credential = chatV1Credential;
        return this;
    }
}