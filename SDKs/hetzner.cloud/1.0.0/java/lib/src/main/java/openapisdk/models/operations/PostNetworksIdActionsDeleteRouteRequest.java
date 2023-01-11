package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNetworksIdActionsDeleteRouteRequest {
    public PostNetworksIdActionsDeleteRoutePathParams pathParams;
    public PostNetworksIdActionsDeleteRouteRequest withPathParams(PostNetworksIdActionsDeleteRoutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest request;
    public PostNetworksIdActionsDeleteRouteRequest withRequest(PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest request) {
        this.request = request;
        return this;
    }
}