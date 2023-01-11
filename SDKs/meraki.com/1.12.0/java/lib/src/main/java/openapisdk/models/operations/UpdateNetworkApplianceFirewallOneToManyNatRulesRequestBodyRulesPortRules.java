package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedIps")
    public String[] allowedIps;
    public UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules withAllowedIps(String[] allowedIps) {
        this.allowedIps = allowedIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localIp")
    public String localIp;
    public UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules withLocalIp(String localIp) {
        this.localIp = localIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localPort")
    public String localPort;
    public UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules withLocalPort(String localPort) {
        this.localPort = localPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum protocol;
    public UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules withProtocol(UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicPort")
    public String publicPort;
    public UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules withPublicPort(String publicPort) {
        this.publicPort = publicPort;
        return this;
    }
}