package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitProjectReportsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=activity_type")
    public String activityType;
    public SubmitProjectReportsRequestBody withActivityType(String activityType) {
        this.activityType = activityType;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=message")
    public String message;
    public SubmitProjectReportsRequestBody withMessage(String message) {
        this.message = message;
        return this;
    }
}