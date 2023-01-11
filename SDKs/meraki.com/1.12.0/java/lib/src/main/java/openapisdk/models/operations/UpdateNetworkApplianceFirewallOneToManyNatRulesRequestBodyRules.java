package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules {
    @JsonProperty("portRules")
    public UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules[] portRules;
    public UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules withPortRules(UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules[] portRules) {
        this.portRules = portRules;
        return this;
    }
    @JsonProperty("publicIp")
    public String publicIp;
    public UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules withPublicIp(String publicIp) {
        this.publicIp = publicIp;
        return this;
    }
    @JsonProperty("uplink")
    public UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum uplink;
    public UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules withUplink(UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum uplink) {
        this.uplink = uplink;
        return this;
    }
}