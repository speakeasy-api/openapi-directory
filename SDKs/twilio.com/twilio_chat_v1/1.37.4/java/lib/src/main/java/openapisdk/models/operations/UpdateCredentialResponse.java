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
    public openapisdk.models.shared.ChatV1Credential chatV1Credential;
    public UpdateCredentialResponse withChatV1Credential(openapisdk.models.shared.ChatV1Credential chatV1Credential) {
        this.chatV1Credential = chatV1Credential;
        return this;
    }
}