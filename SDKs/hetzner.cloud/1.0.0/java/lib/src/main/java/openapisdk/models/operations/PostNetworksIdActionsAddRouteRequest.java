package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNetworksIdActionsAddRouteRequest {
    public PostNetworksIdActionsAddRoutePathParams pathParams;
    public PostNetworksIdActionsAddRouteRequest withPathParams(PostNetworksIdActionsAddRoutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostNetworksIdActionsAddRouteAddDeleteRouteRequest request;
    public PostNetworksIdActionsAddRouteRequest withRequest(PostNetworksIdActionsAddRouteAddDeleteRouteRequest request) {
        this.request = request;
        return this;
    }
}