package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=activityId")
    public Long activityId;
    public SubmitCommentPathParams withActivityId(Long activityId) {
        this.activityId = activityId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public SubmitCommentPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}