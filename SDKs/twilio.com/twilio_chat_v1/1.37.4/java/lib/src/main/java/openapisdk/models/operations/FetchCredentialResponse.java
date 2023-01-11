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
    public openapisdk.models.shared.ChatV1Credential chatV1Credential;
    public FetchCredentialResponse withChatV1Credential(openapisdk.models.shared.ChatV1Credential chatV1Credential) {
        this.chatV1Credential = chatV1Credential;
        return this;
    }
}