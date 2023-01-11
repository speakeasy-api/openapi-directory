package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchTargetsTargetIdFindingsBulkUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public PatchTargetsTargetIdFindingsBulkUpdatePathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}