package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkApplianceTrafficShapingRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkApplianceTrafficShapingRulesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}