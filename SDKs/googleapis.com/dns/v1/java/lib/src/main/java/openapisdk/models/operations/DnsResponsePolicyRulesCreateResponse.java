package openapisdk.models.operations;



public class DnsResponsePolicyRulesCreateResponse {
    public String contentType;
    public DnsResponsePolicyRulesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponsePolicyRule responsePolicyRule;
    public DnsResponsePolicyRulesCreateResponse withResponsePolicyRule(openapisdk.models.shared.ResponsePolicyRule responsePolicyRule) {
        this.responsePolicyRule = responsePolicyRule;
        return this;
    }
    public Long statusCode;
    public DnsResponsePolicyRulesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}