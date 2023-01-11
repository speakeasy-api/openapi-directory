package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum policy;
    public UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules withPolicy(UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum type;
    public UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules withType(UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules withValue(String value) {
        this.value = value;
        return this;
    }
}