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
    public openapisdk.models.shared.NotifyV1Credential notifyV1Credential;
    public UpdateCredentialResponse withNotifyV1Credential(openapisdk.models.shared.NotifyV1Credential notifyV1Credential) {
        this.notifyV1Credential = notifyV1Credential;
        return this;
    }
}