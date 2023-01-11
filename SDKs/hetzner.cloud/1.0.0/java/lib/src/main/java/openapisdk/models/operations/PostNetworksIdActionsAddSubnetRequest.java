package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNetworksIdActionsAddSubnetRequest {
    public PostNetworksIdActionsAddSubnetPathParams pathParams;
    public PostNetworksIdActionsAddSubnetRequest withPathParams(PostNetworksIdActionsAddSubnetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostNetworksIdActionsAddSubnetAddSubnetRequest request;
    public PostNetworksIdActionsAddSubnetRequest withRequest(PostNetworksIdActionsAddSubnetAddSubnetRequest request) {
        this.request = request;
        return this;
    }
}