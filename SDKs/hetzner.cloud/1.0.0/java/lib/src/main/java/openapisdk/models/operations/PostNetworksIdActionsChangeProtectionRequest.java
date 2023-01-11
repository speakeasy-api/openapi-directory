package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNetworksIdActionsChangeProtectionRequest {
    public PostNetworksIdActionsChangeProtectionPathParams pathParams;
    public PostNetworksIdActionsChangeProtectionRequest withPathParams(PostNetworksIdActionsChangeProtectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostNetworksIdActionsChangeProtectionChangeProtectionRequest request;
    public PostNetworksIdActionsChangeProtectionRequest withRequest(PostNetworksIdActionsChangeProtectionChangeProtectionRequest request) {
        this.request = request;
        return this;
    }
}