package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNetworksIdActionsDeleteSubnetRequest {
    public PostNetworksIdActionsDeleteSubnetPathParams pathParams;
    public PostNetworksIdActionsDeleteSubnetRequest withPathParams(PostNetworksIdActionsDeleteSubnetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostNetworksIdActionsDeleteSubnetDeleteSubnetRequest request;
    public PostNetworksIdActionsDeleteSubnetRequest withRequest(PostNetworksIdActionsDeleteSubnetDeleteSubnetRequest request) {
        this.request = request;
        return this;
    }
}