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
    public openapisdk.models.shared.ChatV2Credential chatV2Credential;
    public CreateCredentialResponse withChatV2Credential(openapisdk.models.shared.ChatV2Credential chatV2Credential) {
        this.chatV2Credential = chatV2Credential;
        return this;
    }
}