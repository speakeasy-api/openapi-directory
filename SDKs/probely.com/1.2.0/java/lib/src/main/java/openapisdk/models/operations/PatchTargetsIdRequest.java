package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchTargetsIdRequest {
    public PatchTargetsIdPathParams pathParams;
    public PatchTargetsIdRequest withPathParams(PatchTargetsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TargetInput request;
    public PatchTargetsIdRequest withRequest(openapisdk.models.shared.TargetInput request) {
        this.request = request;
        return this;
    }
}