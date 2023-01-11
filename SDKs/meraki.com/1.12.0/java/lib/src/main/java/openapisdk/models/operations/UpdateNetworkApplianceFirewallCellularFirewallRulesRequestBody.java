package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules[] rules;
    public UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody withRules(UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules[] rules) {
        this.rules = rules;
        return this;
    }
}