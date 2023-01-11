package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}