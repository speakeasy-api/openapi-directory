package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("destCidr")
    public String destCidr;
    public UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules withDestCidr(String destCidr) {
        this.destCidr = destCidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destPort")
    public String destPort;
    public UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules withDestPort(String destPort) {
        this.destPort = destPort;
        return this;
    }
    @JsonProperty("policy")
    public UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum policy;
    public UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules withPolicy(UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum policy) {
        this.policy = policy;
        return this;
    }
    @JsonProperty("protocol")
    public UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum protocol;
    public UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules withProtocol(UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("srcCidr")
    public String srcCidr;
    public UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules withSrcCidr(String srcCidr) {
        this.srcCidr = srcCidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("srcPort")
    public String srcPort;
    public UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules withSrcPort(String srcPort) {
        this.srcPort = srcPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syslogEnabled")
    public Boolean syslogEnabled;
    public UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules withSyslogEnabled(Boolean syslogEnabled) {
        this.syslogEnabled = syslogEnabled;
        return this;
    }
}