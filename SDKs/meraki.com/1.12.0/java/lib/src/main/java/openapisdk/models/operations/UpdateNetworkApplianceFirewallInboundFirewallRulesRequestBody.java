package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules[] rules;
    public UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody withRules(UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules[] rules) {
        this.rules = rules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syslogDefaultRule")
    public Boolean syslogDefaultRule;
    public UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody withSyslogDefaultRule(Boolean syslogDefaultRule) {
        this.syslogDefaultRule = syslogDefaultRule;
        return this;
    }
}