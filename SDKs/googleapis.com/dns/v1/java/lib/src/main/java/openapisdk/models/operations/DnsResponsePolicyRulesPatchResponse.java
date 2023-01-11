package openapisdk.models.operations;



public class DnsResponsePolicyRulesPatchResponse {
    public String contentType;
    public DnsResponsePolicyRulesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponsePolicyRulesPatchResponse responsePolicyRulesPatchResponse;
    public DnsResponsePolicyRulesPatchResponse withResponsePolicyRulesPatchResponse(openapisdk.models.shared.ResponsePolicyRulesPatchResponse responsePolicyRulesPatchResponse) {
        this.responsePolicyRulesPatchResponse = responsePolicyRulesPatchResponse;
        return this;
    }
    public Long statusCode;
    public DnsResponsePolicyRulesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}