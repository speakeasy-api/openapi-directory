package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTargetsTargetIdFindingsIdRequest {
    public PutTargetsTargetIdFindingsIdPathParams pathParams;
    public PutTargetsTargetIdFindingsIdRequest withPathParams(PutTargetsTargetIdFindingsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FindingUpdateInput request;
    public PutTargetsTargetIdFindingsIdRequest withRequest(openapisdk.models.shared.FindingUpdateInput request) {
        this.request = request;
        return this;
    }
}