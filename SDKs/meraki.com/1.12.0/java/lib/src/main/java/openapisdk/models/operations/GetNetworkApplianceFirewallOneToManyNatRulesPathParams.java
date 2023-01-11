package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkApplianceFirewallOneToManyNatRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkApplianceFirewallOneToManyNatRulesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}