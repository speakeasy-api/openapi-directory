package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("destCidr")
    public String destCidr;
    public UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules withDestCidr(String destCidr) {
        this.destCidr = destCidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destPort")
    public String destPort;
    public UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules withDestPort(String destPort) {
        this.destPort = destPort;
        return this;
    }
    @JsonProperty("policy")
    public UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum policy;
    public UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules withPolicy(UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum policy) {
        this.policy = policy;
        return this;
    }
    @JsonProperty("protocol")
    public UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum protocol;
    public UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules withProtocol(UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
}