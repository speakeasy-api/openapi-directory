package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetsTargetIdAssetsRequest {
    public PostTargetsTargetIdAssetsPathParams pathParams;
    public PostTargetsTargetIdAssetsRequest withPathParams(PostTargetsTargetIdAssetsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssetInput request;
    public PostTargetsTargetIdAssetsRequest withRequest(openapisdk.models.shared.AssetInput request) {
        this.request = request;
        return this;
    }
}