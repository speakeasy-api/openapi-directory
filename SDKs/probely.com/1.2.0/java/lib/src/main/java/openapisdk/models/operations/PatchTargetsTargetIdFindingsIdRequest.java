package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchTargetsTargetIdFindingsIdRequest {
    public PatchTargetsTargetIdFindingsIdPathParams pathParams;
    public PatchTargetsTargetIdFindingsIdRequest withPathParams(PatchTargetsTargetIdFindingsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FindingUpdateInput request;
    public PatchTargetsTargetIdFindingsIdRequest withRequest(openapisdk.models.shared.FindingUpdateInput request) {
        this.request = request;
        return this;
    }
}