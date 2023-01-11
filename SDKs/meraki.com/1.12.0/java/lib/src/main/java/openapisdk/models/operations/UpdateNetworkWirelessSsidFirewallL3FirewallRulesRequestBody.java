package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowLanAccess")
    public Boolean allowLanAccess;
    public UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody withAllowLanAccess(Boolean allowLanAccess) {
        this.allowLanAccess = allowLanAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules[] rules;
    public UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody withRules(UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules[] rules) {
        this.rules = rules;
        return this;
    }
}