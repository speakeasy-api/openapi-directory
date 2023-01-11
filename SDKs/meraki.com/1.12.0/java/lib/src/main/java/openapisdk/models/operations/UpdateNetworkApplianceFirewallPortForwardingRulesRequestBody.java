package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody {
    @JsonProperty("rules")
    public UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules[] rules;
    public UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody withRules(UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules[] rules) {
        this.rules = rules;
        return this;
    }
}