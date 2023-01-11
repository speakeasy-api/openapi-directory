package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceTrafficShapingRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkApplianceTrafficShapingRulesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}