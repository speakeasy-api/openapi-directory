package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum policy;
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules withPolicy(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum type;
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules withType(CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules withValue(String value) {
        this.value = value;
        return this;
    }
}