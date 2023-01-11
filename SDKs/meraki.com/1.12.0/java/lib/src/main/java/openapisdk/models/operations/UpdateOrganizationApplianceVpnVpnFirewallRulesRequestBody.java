package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules[] rules;
    public UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody withRules(UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules[] rules) {
        this.rules = rules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syslogDefaultRule")
    public Boolean syslogDefaultRule;
    public UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody withSyslogDefaultRule(Boolean syslogDefaultRule) {
        this.syslogDefaultRule = syslogDefaultRule;
        return this;
    }
}