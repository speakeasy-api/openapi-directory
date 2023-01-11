package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetsTargetIdSiteVerifyRequest {
    public PostTargetsTargetIdSiteVerifyPathParams pathParams;
    public PostTargetsTargetIdSiteVerifyRequest withPathParams(PostTargetsTargetIdSiteVerifyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostTargetsTargetIdSiteVerifyRequestBody request;
    public PostTargetsTargetIdSiteVerifyRequest withRequest(PostTargetsTargetIdSiteVerifyRequestBody request) {
        this.request = request;
        return this;
    }
}