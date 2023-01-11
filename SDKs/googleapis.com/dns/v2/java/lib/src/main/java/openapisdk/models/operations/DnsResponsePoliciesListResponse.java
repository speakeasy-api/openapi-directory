package openapisdk.models.operations;



public class DnsResponsePoliciesListResponse {
    public String contentType;
    public DnsResponsePoliciesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponsePoliciesListResponse responsePoliciesListResponse;
    public DnsResponsePoliciesListResponse withResponsePoliciesListResponse(openapisdk.models.shared.ResponsePoliciesListResponse responsePoliciesListResponse) {
        this.responsePoliciesListResponse = responsePoliciesListResponse;
        return this;
    }
    public Long statusCode;
    public DnsResponsePoliciesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}