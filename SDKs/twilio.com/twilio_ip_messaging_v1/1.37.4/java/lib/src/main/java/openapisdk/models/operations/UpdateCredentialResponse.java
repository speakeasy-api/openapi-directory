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
    public openapisdk.models.shared.IpMessagingV1Credential ipMessagingV1Credential;
    public UpdateCredentialResponse withIpMessagingV1Credential(openapisdk.models.shared.IpMessagingV1Credential ipMessagingV1Credential) {
        this.ipMessagingV1Credential = ipMessagingV1Credential;
        return this;
    }
}