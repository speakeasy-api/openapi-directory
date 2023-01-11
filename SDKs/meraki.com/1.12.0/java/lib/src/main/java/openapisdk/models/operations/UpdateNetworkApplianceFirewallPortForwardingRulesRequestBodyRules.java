package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules {
    @JsonProperty("allowedIps")
    public String[] allowedIps;
    public UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules withAllowedIps(String[] allowedIps) {
        this.allowedIps = allowedIps;
        return this;
    }
    @JsonProperty("lanIp")
    public String lanIp;
    public UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules withLanIp(String lanIp) {
        this.lanIp = lanIp;
        return this;
    }
    @JsonProperty("localPort")
    public String localPort;
    public UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules withLocalPort(String localPort) {
        this.localPort = localPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("protocol")
    public UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum protocol;
    public UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules withProtocol(UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonProperty("publicPort")
    public String publicPort;
    public UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules withPublicPort(String publicPort) {
        this.publicPort = publicPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uplink")
    public UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum uplink;
    public UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules withUplink(UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum uplink) {
        this.uplink = uplink;
        return this;
    }
}