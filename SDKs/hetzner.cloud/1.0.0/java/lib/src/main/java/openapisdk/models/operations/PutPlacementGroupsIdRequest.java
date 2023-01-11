package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPlacementGroupsIdRequest {
    public PutPlacementGroupsIdPathParams pathParams;
    public PutPlacementGroupsIdRequest withPathParams(PutPlacementGroupsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutPlacementGroupsIdUpdatePlacementGroupRequest request;
    public PutPlacementGroupsIdRequest withRequest(PutPlacementGroupsIdUpdatePlacementGroupRequest request) {
        this.request = request;
        return this;
    }
}