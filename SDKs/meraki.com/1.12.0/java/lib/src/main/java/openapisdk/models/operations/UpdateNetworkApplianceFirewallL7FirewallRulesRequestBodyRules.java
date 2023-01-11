package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum policy;
    public UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules withPolicy(UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum type;
    public UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules withType(UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules withValue(String value) {
        this.value = value;
        return this;
    }
}