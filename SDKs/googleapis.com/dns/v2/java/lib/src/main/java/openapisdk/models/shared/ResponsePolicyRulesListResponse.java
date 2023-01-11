package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResponsePolicyRulesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("header")
    public ResponseHeader header;
    public ResponsePolicyRulesListResponse withHeader(ResponseHeader header) {
        this.header = header;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ResponsePolicyRulesListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responsePolicyRules")
    public ResponsePolicyRule[] responsePolicyRules;
    public ResponsePolicyRulesListResponse withResponsePolicyRules(ResponsePolicyRule[] responsePolicyRules) {
        this.responsePolicyRules = responsePolicyRules;
        return this;
    }
}