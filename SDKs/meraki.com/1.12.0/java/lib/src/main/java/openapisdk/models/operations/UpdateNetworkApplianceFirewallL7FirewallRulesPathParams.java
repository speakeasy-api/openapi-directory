package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceFirewallL7FirewallRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkApplianceFirewallL7FirewallRulesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}