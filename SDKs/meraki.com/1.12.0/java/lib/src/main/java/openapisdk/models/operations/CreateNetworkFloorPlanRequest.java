package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkFloorPlanRequest {
    public CreateNetworkFloorPlanPathParams pathParams;
    public CreateNetworkFloorPlanRequest withPathParams(CreateNetworkFloorPlanPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkFloorPlanRequestBody request;
    public CreateNetworkFloorPlanRequest withRequest(CreateNetworkFloorPlanRequestBody request) {
        this.request = request;
        return this;
    }
}