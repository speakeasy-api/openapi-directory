package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("destCidr")
    public String destCidr;
    public UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules withDestCidr(String destCidr) {
        this.destCidr = destCidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destPort")
    public String destPort;
    public UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules withDestPort(String destPort) {
        this.destPort = destPort;
        return this;
    }
    @JsonProperty("policy")
    public UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum policy;
    public UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules withPolicy(UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum policy) {
        this.policy = policy;
        return this;
    }
    @JsonProperty("protocol")
    public UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum protocol;
    public UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules withProtocol(UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("srcCidr")
    public String srcCidr;
    public UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules withSrcCidr(String srcCidr) {
        this.srcCidr = srcCidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("srcPort")
    public String srcPort;
    public UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules withSrcPort(String srcPort) {
        this.srcPort = srcPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syslogEnabled")
    public Boolean syslogEnabled;
    public UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules withSyslogEnabled(Boolean syslogEnabled) {
        this.syslogEnabled = syslogEnabled;
        return this;
    }
}