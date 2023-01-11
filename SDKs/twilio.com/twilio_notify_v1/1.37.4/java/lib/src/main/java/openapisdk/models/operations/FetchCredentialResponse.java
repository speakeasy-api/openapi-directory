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
    public openapisdk.models.shared.NotifyV1Credential notifyV1Credential;
    public FetchCredentialResponse withNotifyV1Credential(openapisdk.models.shared.NotifyV1Credential notifyV1Credential) {
        this.notifyV1Credential = notifyV1Credential;
        return this;
    }
}