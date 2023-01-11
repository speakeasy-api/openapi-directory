package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetsTargetIdFindingsBulkReportRequest {
    public PostTargetsTargetIdFindingsBulkReportPathParams pathParams;
    public PostTargetsTargetIdFindingsBulkReportRequest withPathParams(PostTargetsTargetIdFindingsBulkReportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FindingBulkIds request;
    public PostTargetsTargetIdFindingsBulkReportRequest withRequest(openapisdk.models.shared.FindingBulkIds request) {
        this.request = request;
        return this;
    }
}