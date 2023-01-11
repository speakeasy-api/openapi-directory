package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkApplianceFirewallPortForwardingRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkApplianceFirewallPortForwardingRulesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}