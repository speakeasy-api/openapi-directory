package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetsTargetIdScheduledscansRequest {
    public PostTargetsTargetIdScheduledscansPathParams pathParams;
    public PostTargetsTargetIdScheduledscansRequest withPathParams(PostTargetsTargetIdScheduledscansPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostTargetsTargetIdScheduledscansRequestBody request;
    public PostTargetsTargetIdScheduledscansRequest withRequest(PostTargetsTargetIdScheduledscansRequestBody request) {
        this.request = request;
        return this;
    }
}