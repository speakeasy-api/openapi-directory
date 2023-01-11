package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody {
    @JsonProperty("rules")
    public UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules[] rules;
    public UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody withRules(UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules[] rules) {
        this.rules = rules;
        return this;
    }
}