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
    public openapisdk.models.shared.IpMessagingV2Credential ipMessagingV2Credential;
    public FetchCredentialResponse withIpMessagingV2Credential(openapisdk.models.shared.IpMessagingV2Credential ipMessagingV2Credential) {
        this.ipMessagingV2Credential = ipMessagingV2Credential;
        return this;
    }
}