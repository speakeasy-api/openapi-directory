package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules[] rules;
    public UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody withRules(UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules[] rules) {
        this.rules = rules;
        return this;
    }
}