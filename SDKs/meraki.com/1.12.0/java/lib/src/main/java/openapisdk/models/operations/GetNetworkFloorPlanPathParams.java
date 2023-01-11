package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkFloorPlanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=floorPlanId")
    public String floorPlanId;
    public GetNetworkFloorPlanPathParams withFloorPlanId(String floorPlanId) {
        this.floorPlanId = floorPlanId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkFloorPlanPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}