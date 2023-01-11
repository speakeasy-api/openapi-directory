package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTargetsTargetIdScheduledscansExpandedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public GetTargetsTargetIdScheduledscansExpandedPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}