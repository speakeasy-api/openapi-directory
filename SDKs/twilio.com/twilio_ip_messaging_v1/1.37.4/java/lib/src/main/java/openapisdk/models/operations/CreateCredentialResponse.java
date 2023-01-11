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
    public openapisdk.models.shared.IpMessagingV1Credential ipMessagingV1Credential;
    public CreateCredentialResponse withIpMessagingV1Credential(openapisdk.models.shared.IpMessagingV1Credential ipMessagingV1Credential) {
        this.ipMessagingV1Credential = ipMessagingV1Credential;
        return this;
    }
}