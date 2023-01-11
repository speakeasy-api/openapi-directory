package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlusCommentsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=activityId")
    public String activityId;
    public PlusCommentsListPathParams withActivityId(String activityId) {
        this.activityId = activityId;
        return this;
    }
}