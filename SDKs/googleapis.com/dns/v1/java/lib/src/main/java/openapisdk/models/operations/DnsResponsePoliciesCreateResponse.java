package openapisdk.models.operations;



public class DnsResponsePoliciesCreateResponse {
    public String contentType;
    public DnsResponsePoliciesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponsePolicy responsePolicy;
    public DnsResponsePoliciesCreateResponse withResponsePolicy(openapisdk.models.shared.ResponsePolicy responsePolicy) {
        this.responsePolicy = responsePolicy;
        return this;
    }
    public Long statusCode;
    public DnsResponsePoliciesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}