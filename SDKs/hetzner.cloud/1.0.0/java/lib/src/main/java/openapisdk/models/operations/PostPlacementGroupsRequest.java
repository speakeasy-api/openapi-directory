package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPlacementGroupsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPlacementGroupsCreatePlacementGroupRequest request;
    public PostPlacementGroupsRequest withRequest(PostPlacementGroupsCreatePlacementGroupRequest request) {
        this.request = request;
        return this;
    }
}