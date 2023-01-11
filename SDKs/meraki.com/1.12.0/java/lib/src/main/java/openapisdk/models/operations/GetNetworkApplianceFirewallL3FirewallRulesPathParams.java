package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkApplianceFirewallL3FirewallRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkApplianceFirewallL3FirewallRulesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}