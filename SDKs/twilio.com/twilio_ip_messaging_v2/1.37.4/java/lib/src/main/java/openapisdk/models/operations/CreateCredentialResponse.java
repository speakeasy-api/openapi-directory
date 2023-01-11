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
    public openapisdk.models.shared.IpMessagingV2Credential ipMessagingV2Credential;
    public CreateCredentialResponse withIpMessagingV2Credential(openapisdk.models.shared.IpMessagingV2Credential ipMessagingV2Credential) {
        this.ipMessagingV2Credential = ipMessagingV2Credential;
        return this;
    }
}