package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResponsePolicyRule
 * A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix.
**/
public class ResponsePolicyRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("behavior")
    public ResponsePolicyRuleBehaviorEnum behavior;
    public ResponsePolicyRule withBehavior(ResponsePolicyRuleBehaviorEnum behavior) {
        this.behavior = behavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsName")
    public String dnsName;
    public ResponsePolicyRule withDnsName(String dnsName) {
        this.dnsName = dnsName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ResponsePolicyRule withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localData")
    public ResponsePolicyRuleLocalData localData;
    public ResponsePolicyRule withLocalData(ResponsePolicyRuleLocalData localData) {
        this.localData = localData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleName")
    public String ruleName;
    public ResponsePolicyRule withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
}