package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetsTargetIdScheduledscansPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public PostTargetsTargetIdScheduledscansPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}