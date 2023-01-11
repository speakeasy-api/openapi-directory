package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetsTargetIdScanNowRequest {
    public PostTargetsTargetIdScanNowPathParams pathParams;
    public PostTargetsTargetIdScanNowRequest withPathParams(PostTargetsTargetIdScanNowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostTargetsTargetIdScanNowRequestBody request;
    public PostTargetsTargetIdScanNowRequest withRequest(PostTargetsTargetIdScanNowRequestBody request) {
        this.request = request;
        return this;
    }
}