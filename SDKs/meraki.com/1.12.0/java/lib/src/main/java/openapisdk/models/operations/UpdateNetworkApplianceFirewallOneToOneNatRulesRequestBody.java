package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody {
    @JsonProperty("rules")
    public UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules[] rules;
    public UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody withRules(UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules[] rules) {
        this.rules = rules;
        return this;
    }
}