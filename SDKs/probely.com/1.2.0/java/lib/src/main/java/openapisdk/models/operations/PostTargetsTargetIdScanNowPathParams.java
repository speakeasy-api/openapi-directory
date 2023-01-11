package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetsTargetIdScanNowPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public PostTargetsTargetIdScanNowPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}