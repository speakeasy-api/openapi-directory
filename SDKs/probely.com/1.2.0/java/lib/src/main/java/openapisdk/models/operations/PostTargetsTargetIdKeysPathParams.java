package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetsTargetIdKeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public PostTargetsTargetIdKeysPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}