package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceTrafficShapingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkApplianceTrafficShapingPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}