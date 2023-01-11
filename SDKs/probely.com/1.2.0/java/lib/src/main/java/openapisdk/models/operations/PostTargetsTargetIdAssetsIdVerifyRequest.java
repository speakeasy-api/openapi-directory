package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetsTargetIdAssetsIdVerifyRequest {
    public PostTargetsTargetIdAssetsIdVerifyPathParams pathParams;
    public PostTargetsTargetIdAssetsIdVerifyRequest withPathParams(PostTargetsTargetIdAssetsIdVerifyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostTargetsTargetIdAssetsIdVerifyRequestBody request;
    public PostTargetsTargetIdAssetsIdVerifyRequest withRequest(PostTargetsTargetIdAssetsIdVerifyRequestBody request) {
        this.request = request;
        return this;
    }
}