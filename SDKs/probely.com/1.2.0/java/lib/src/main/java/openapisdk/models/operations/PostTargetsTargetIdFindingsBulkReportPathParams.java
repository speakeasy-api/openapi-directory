package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetsTargetIdFindingsBulkReportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public PostTargetsTargetIdFindingsBulkReportPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}