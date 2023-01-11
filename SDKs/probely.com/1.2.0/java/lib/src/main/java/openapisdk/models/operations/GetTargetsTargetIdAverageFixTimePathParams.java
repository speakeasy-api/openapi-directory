package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTargetsTargetIdAverageFixTimePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public GetTargetsTargetIdAverageFixTimePathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}