package openapisdk.models.operations;



public class DnsResponsePoliciesPatchResponse {
    public String contentType;
    public DnsResponsePoliciesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponsePoliciesPatchResponse responsePoliciesPatchResponse;
    public DnsResponsePoliciesPatchResponse withResponsePoliciesPatchResponse(openapisdk.models.shared.ResponsePoliciesPatchResponse responsePoliciesPatchResponse) {
        this.responsePoliciesPatchResponse = responsePoliciesPatchResponse;
        return this;
    }
    public Long statusCode;
    public DnsResponsePoliciesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}