package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTargetsTargetIdTopVulnsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public GetTargetsTargetIdTopVulnsPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}