package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNetworksIdActionsChangeIpRangeRequest {
    public PostNetworksIdActionsChangeIpRangePathParams pathParams;
    public PostNetworksIdActionsChangeIpRangeRequest withPathParams(PostNetworksIdActionsChangeIpRangePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostNetworksIdActionsChangeIpRangeChangeIpRangeRequest request;
    public PostNetworksIdActionsChangeIpRangeRequest withRequest(PostNetworksIdActionsChangeIpRangeChangeIpRangeRequest request) {
        this.request = request;
        return this;
    }
}