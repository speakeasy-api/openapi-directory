package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}