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
    public openapisdk.models.shared.IpMessagingV1Credential ipMessagingV1Credential;
    public FetchCredentialResponse withIpMessagingV1Credential(openapisdk.models.shared.IpMessagingV1Credential ipMessagingV1Credential) {
        this.ipMessagingV1Credential = ipMessagingV1Credential;
        return this;
    }
}