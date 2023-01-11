package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedInbound")
    public UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound[] allowedInbound;
    public UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules withAllowedInbound(UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound[] allowedInbound) {
        this.allowedInbound = allowedInbound;
        return this;
    }
    @JsonProperty("lanIp")
    public String lanIp;
    public UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules withLanIp(String lanIp) {
        this.lanIp = lanIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicIp")
    public String publicIp;
    public UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules withPublicIp(String publicIp) {
        this.publicIp = publicIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uplink")
    public UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum uplink;
    public UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules withUplink(UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum uplink) {
        this.uplink = uplink;
        return this;
    }
}