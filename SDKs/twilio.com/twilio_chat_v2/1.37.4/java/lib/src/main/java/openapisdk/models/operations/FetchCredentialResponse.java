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
    public openapisdk.models.shared.ChatV2Credential chatV2Credential;
    public FetchCredentialResponse withChatV2Credential(openapisdk.models.shared.ChatV2Credential chatV2Credential) {
        this.chatV2Credential = chatV2Credential;
        return this;
    }
}