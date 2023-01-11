package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResponsePolicyRulesUpdateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("header")
    public ResponseHeader header;
    public ResponsePolicyRulesUpdateResponse withHeader(ResponseHeader header) {
        this.header = header;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responsePolicyRule")
    public ResponsePolicyRule responsePolicyRule;
    public ResponsePolicyRulesUpdateResponse withResponsePolicyRule(ResponsePolicyRule responsePolicyRule) {
        this.responsePolicyRule = responsePolicyRule;
        return this;
    }
}