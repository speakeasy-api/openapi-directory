package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchTargetsTargetIdFindingsBulkUpdateRequest {
    public PatchTargetsTargetIdFindingsBulkUpdatePathParams pathParams;
    public PatchTargetsTargetIdFindingsBulkUpdateRequest withPathParams(PatchTargetsTargetIdFindingsBulkUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FindingBulkUpdateInput request;
    public PatchTargetsTargetIdFindingsBulkUpdateRequest withRequest(openapisdk.models.shared.FindingBulkUpdateInput request) {
        this.request = request;
        return this;
    }
}