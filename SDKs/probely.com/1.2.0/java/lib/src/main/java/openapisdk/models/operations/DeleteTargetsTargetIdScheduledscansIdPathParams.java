package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTargetsTargetIdScheduledscansIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteTargetsTargetIdScheduledscansIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public DeleteTargetsTargetIdScheduledscansIdPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}