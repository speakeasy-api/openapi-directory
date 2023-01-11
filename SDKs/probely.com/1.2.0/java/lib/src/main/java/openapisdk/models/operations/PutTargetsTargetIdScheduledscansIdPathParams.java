package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTargetsTargetIdScheduledscansIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutTargetsTargetIdScheduledscansIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=target_id")
    public String targetId;
    public PutTargetsTargetIdScheduledscansIdPathParams withTargetId(String targetId) {
        this.targetId = targetId;
        return this;
    }
}