package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceFirewallInboundFirewallRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkApplianceFirewallInboundFirewallRulesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}