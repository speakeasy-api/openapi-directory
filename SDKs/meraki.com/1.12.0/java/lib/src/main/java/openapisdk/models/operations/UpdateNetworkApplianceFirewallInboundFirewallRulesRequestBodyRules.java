package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("destCidr")
    public String destCidr;
    public UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules withDestCidr(String destCidr) {
        this.destCidr = destCidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destPort")
    public String destPort;
    public UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules withDestPort(String destPort) {
        this.destPort = destPort;
        return this;
    }
    @JsonProperty("policy")
    public UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum policy;
    public UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules withPolicy(UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum policy) {
        this.policy = policy;
        return this;
    }
    @JsonProperty("protocol")
    public UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum protocol;
    public UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules withProtocol(UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("srcCidr")
    public String srcCidr;
    public UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules withSrcCidr(String srcCidr) {
        this.srcCidr = srcCidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("srcPort")
    public String srcPort;
    public UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules withSrcPort(String srcPort) {
        this.srcPort = srcPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syslogEnabled")
    public Boolean syslogEnabled;
    public UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules withSyslogEnabled(Boolean syslogEnabled) {
        this.syslogEnabled = syslogEnabled;
        return this;
    }
}