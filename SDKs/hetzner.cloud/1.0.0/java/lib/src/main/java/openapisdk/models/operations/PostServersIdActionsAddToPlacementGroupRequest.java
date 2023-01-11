package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostServersIdActionsAddToPlacementGroupRequest {
    public PostServersIdActionsAddToPlacementGroupPathParams pathParams;
    public PostServersIdActionsAddToPlacementGroupRequest withPathParams(PostServersIdActionsAddToPlacementGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest request;
    public PostServersIdActionsAddToPlacementGroupRequest withRequest(PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest request) {
        this.request = request;
        return this;
    }
}