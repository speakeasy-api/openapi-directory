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
    public openapisdk.models.shared.ChatV2Credential chatV2Credential;
    public UpdateCredentialResponse withChatV2Credential(openapisdk.models.shared.ChatV2Credential chatV2Credential) {
        this.chatV2Credential = chatV2Credential;
        return this;
    }
}