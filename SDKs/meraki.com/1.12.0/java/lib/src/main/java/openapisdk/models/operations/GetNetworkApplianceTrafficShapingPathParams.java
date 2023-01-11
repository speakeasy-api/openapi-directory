package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkApplianceTrafficShapingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkApplianceTrafficShapingPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}