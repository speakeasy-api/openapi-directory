package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResponsePolicyRulesPatchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("header")
    public ResponseHeader header;
    public ResponsePolicyRulesPatchResponse withHeader(ResponseHeader header) {
        this.header = header;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responsePolicyRule")
    public ResponsePolicyRule responsePolicyRule;
    public ResponsePolicyRulesPatchResponse withResponsePolicyRule(ResponsePolicyRule responsePolicyRule) {
        this.responsePolicyRule = responsePolicyRule;
        return this;
    }
}