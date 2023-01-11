package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetsTargetIdFindingsBulkRetestRequest {
    public PostTargetsTargetIdFindingsBulkRetestPathParams pathParams;
    public PostTargetsTargetIdFindingsBulkRetestRequest withPathParams(PostTargetsTargetIdFindingsBulkRetestPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FindingBulkRetest request;
    public PostTargetsTargetIdFindingsBulkRetestRequest withRequest(openapisdk.models.shared.FindingBulkRetest request) {
        this.request = request;
        return this;
    }
}