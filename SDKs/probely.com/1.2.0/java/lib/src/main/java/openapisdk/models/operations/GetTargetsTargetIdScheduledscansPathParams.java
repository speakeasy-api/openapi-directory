package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTargetsTargetIdScheduledscansPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public GetTargetsTargetIdScheduledscansPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}