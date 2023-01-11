package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkFloorPlanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=floorPlanId")
    public String floorPlanId;
    public UpdateNetworkFloorPlanPathParams withFloorPlanId(String floorPlanId) {
        this.floorPlanId = floorPlanId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkFloorPlanPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}