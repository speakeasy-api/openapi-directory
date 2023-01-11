package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("destCidr")
    public String destCidr;
    public UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules withDestCidr(String destCidr) {
        this.destCidr = destCidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destPort")
    public String destPort;
    public UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules withDestPort(String destPort) {
        this.destPort = destPort;
        return this;
    }
    @JsonProperty("policy")
    public String policy;
    public UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum protocol;
    public UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules withProtocol(UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
}