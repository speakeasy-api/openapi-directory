package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetsTargetIdFindingsBulkRetestPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public PostTargetsTargetIdFindingsBulkRetestPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}