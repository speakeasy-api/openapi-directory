package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkApplianceTrafficShapingUplinkSelectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkApplianceTrafficShapingUplinkSelectionPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}