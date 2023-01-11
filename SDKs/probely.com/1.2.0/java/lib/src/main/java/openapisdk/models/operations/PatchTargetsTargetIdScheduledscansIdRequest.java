package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchTargetsTargetIdScheduledscansIdRequest {
    public PatchTargetsTargetIdScheduledscansIdPathParams pathParams;
    public PatchTargetsTargetIdScheduledscansIdRequest withPathParams(PatchTargetsTargetIdScheduledscansIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PatchTargetsTargetIdScheduledscansIdRequestBody request;
    public PatchTargetsTargetIdScheduledscansIdRequest withRequest(PatchTargetsTargetIdScheduledscansIdRequestBody request) {
        this.request = request;
        return this;
    }
}