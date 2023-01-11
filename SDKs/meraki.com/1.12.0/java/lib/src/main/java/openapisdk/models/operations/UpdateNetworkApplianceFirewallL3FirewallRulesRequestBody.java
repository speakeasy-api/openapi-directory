package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules[] rules;
    public UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody withRules(UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules[] rules) {
        this.rules = rules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syslogDefaultRule")
    public Boolean syslogDefaultRule;
    public UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody withSyslogDefaultRule(Boolean syslogDefaultRule) {
        this.syslogDefaultRule = syslogDefaultRule;
        return this;
    }
}