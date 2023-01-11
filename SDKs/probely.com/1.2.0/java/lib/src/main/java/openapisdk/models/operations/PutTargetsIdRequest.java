package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTargetsIdRequest {
    public PutTargetsIdPathParams pathParams;
    public PutTargetsIdRequest withPathParams(PutTargetsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TargetInput request;
    public PutTargetsIdRequest withRequest(openapisdk.models.shared.TargetInput request) {
        this.request = request;
        return this;
    }
}