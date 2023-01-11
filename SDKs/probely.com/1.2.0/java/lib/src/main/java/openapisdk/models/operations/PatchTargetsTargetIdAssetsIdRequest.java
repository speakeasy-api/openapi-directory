package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchTargetsTargetIdAssetsIdRequest {
    public PatchTargetsTargetIdAssetsIdPathParams pathParams;
    public PatchTargetsTargetIdAssetsIdRequest withPathParams(PatchTargetsTargetIdAssetsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssetInput request;
    public PatchTargetsTargetIdAssetsIdRequest withRequest(openapisdk.models.shared.AssetInput request) {
        this.request = request;
        return this;
    }
}