package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkFloorPlansPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkFloorPlansPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}