package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTargetsTargetIdAssetsIdRequest {
    public PutTargetsTargetIdAssetsIdPathParams pathParams;
    public PutTargetsTargetIdAssetsIdRequest withPathParams(PutTargetsTargetIdAssetsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssetInput request;
    public PutTargetsTargetIdAssetsIdRequest withRequest(openapisdk.models.shared.AssetInput request) {
        this.request = request;
        return this;
    }
}