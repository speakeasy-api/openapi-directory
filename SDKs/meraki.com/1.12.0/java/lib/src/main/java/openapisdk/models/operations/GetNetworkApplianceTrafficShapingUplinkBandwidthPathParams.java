package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkApplianceTrafficShapingUplinkBandwidthPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkApplianceTrafficShapingUplinkBandwidthPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}