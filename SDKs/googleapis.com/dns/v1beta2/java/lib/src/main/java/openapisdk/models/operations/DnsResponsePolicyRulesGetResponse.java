package openapisdk.models.operations;



public class DnsResponsePolicyRulesGetResponse {
    public String contentType;
    public DnsResponsePolicyRulesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponsePolicyRule responsePolicyRule;
    public DnsResponsePolicyRulesGetResponse withResponsePolicyRule(openapisdk.models.shared.ResponsePolicyRule responsePolicyRule) {
        this.responsePolicyRule = responsePolicyRule;
        return this;
    }
    public Long statusCode;
    public DnsResponsePolicyRulesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}