package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("destCidr")
    public String destCidr;
    public UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules withDestCidr(String destCidr) {
        this.destCidr = destCidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destPort")
    public String destPort;
    public UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules withDestPort(String destPort) {
        this.destPort = destPort;
        return this;
    }
    @JsonProperty("policy")
    public UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum policy;
    public UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules withPolicy(UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum policy) {
        this.policy = policy;
        return this;
    }
    @JsonProperty("protocol")
    public UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum protocol;
    public UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules withProtocol(UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("srcCidr")
    public String srcCidr;
    public UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules withSrcCidr(String srcCidr) {
        this.srcCidr = srcCidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("srcPort")
    public String srcPort;
    public UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules withSrcPort(String srcPort) {
        this.srcPort = srcPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syslogEnabled")
    public Boolean syslogEnabled;
    public UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules withSyslogEnabled(Boolean syslogEnabled) {
        this.syslogEnabled = syslogEnabled;
        return this;
    }
}