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
    public openapisdk.models.shared.NotifyV1Credential notifyV1Credential;
    public CreateCredentialResponse withNotifyV1Credential(openapisdk.models.shared.NotifyV1Credential notifyV1Credential) {
        this.notifyV1Credential = notifyV1Credential;
        return this;
    }
}