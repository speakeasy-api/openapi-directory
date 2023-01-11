package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetsTargetIdKeysRequest {
    public PostTargetsTargetIdKeysPathParams pathParams;
    public PostTargetsTargetIdKeysRequest withPathParams(PostTargetsTargetIdKeysPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApiKeyInput request;
    public PostTargetsTargetIdKeysRequest withRequest(openapisdk.models.shared.ApiKeyInput request) {
        this.request = request;
        return this;
    }
}