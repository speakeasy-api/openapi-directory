package openapisdk.models.operations;



public class DnsResponsePoliciesGetResponse {
    public String contentType;
    public DnsResponsePoliciesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponsePolicy responsePolicy;
    public DnsResponsePoliciesGetResponse withResponsePolicy(openapisdk.models.shared.ResponsePolicy responsePolicy) {
        this.responsePolicy = responsePolicy;
        return this;
    }
    public Long statusCode;
    public DnsResponsePoliciesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}