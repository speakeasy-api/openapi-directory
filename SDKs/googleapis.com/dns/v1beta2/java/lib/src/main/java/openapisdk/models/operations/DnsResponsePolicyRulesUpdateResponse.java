package openapisdk.models.operations;



public class DnsResponsePolicyRulesUpdateResponse {
    public String contentType;
    public DnsResponsePolicyRulesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResponsePolicyRulesUpdateResponse responsePolicyRulesUpdateResponse;
    public DnsResponsePolicyRulesUpdateResponse withResponsePolicyRulesUpdateResponse(openapisdk.models.shared.ResponsePolicyRulesUpdateResponse responsePolicyRulesUpdateResponse) {
        this.responsePolicyRulesUpdateResponse = responsePolicyRulesUpdateResponse;
        return this;
    }
    public Long statusCode;
    public DnsResponsePolicyRulesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}