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
    public openapisdk.models.shared.IpMessagingV2Credential ipMessagingV2Credential;
    public UpdateCredentialResponse withIpMessagingV2Credential(openapisdk.models.shared.IpMessagingV2Credential ipMessagingV2Credential) {
        this.ipMessagingV2Credential = ipMessagingV2Credential;
        return this;
    }
}