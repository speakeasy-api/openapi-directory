package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlusActivitiesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=activityId")
    public String activityId;
    public PlusActivitiesGetPathParams withActivityId(String activityId) {
        this.activityId = activityId;
        return this;
    }
}