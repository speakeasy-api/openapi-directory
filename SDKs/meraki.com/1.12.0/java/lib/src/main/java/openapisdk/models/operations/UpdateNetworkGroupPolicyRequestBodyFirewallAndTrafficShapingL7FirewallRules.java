package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum policy;
    public UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules withPolicy(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum type;
    public UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules withType(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules withValue(String value) {
        this.value = value;
        return this;
    }
}