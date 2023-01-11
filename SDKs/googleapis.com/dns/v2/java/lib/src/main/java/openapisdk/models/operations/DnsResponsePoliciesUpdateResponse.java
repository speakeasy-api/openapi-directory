package openapisdk.models.operations;



public class DnsResponsePoliciesUpdateResponse {
    public String contentType;
    public DnsResponsePoliciesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponsePoliciesUpdateResponse responsePoliciesUpdateResponse;
    public DnsResponsePoliciesUpdateResponse withResponsePoliciesUpdateResponse(openapisdk.models.shared.ResponsePoliciesUpdateResponse responsePoliciesUpdateResponse) {
        this.responsePoliciesUpdateResponse = responsePoliciesUpdateResponse;
        return this;
    }
    public Long statusCode;
    public DnsResponsePoliciesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}