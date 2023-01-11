package openapisdk.models.operations;



public class DnsResponsePolicyRulesListResponse {
    public String contentType;
    public DnsResponsePolicyRulesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponsePolicyRulesListResponse responsePolicyRulesListResponse;
    public DnsResponsePolicyRulesListResponse withResponsePolicyRulesListResponse(openapisdk.models.shared.ResponsePolicyRulesListResponse responsePolicyRulesListResponse) {
        this.responsePolicyRulesListResponse = responsePolicyRulesListResponse;
        return this;
    }
    public Long statusCode;
    public DnsResponsePolicyRulesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}