package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTargetsTargetIdScheduledscansIdRequest {
    public PutTargetsTargetIdScheduledscansIdPathParams pathParams;
    public PutTargetsTargetIdScheduledscansIdRequest withPathParams(PutTargetsTargetIdScheduledscansIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutTargetsTargetIdScheduledscansIdRequestBody request;
    public PutTargetsTargetIdScheduledscansIdRequest withRequest(PutTargetsTargetIdScheduledscansIdRequestBody request) {
        this.request = request;
        return this;
    }
}