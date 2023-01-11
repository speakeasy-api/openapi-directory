package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules[] rules;
    public UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody withRules(UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules[] rules) {
        this.rules = rules;
        return this;
    }
}