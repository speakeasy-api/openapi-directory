package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTargetsTargetIdKeysIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteTargetsTargetIdKeysIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public DeleteTargetsTargetIdKeysIdPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}