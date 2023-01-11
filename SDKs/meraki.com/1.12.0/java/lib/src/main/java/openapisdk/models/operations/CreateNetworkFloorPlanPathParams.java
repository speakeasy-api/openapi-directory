package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkFloorPlanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public CreateNetworkFloorPlanPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}