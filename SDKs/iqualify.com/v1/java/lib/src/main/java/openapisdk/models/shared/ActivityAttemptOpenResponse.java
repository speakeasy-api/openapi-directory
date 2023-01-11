package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActivityAttemptOpenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityId")
    public String activityId;
    public ActivityAttemptOpenResponse withActivityId(String activityId) {
        this.activityId = activityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityType")
    public String activityType;
    public ActivityAttemptOpenResponse withActivityType(String activityType) {
        this.activityType = activityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedback")
    public ActivityAttemptOpenResponseFeedback feedback;
    public ActivityAttemptOpenResponse withFeedback(ActivityAttemptOpenResponseFeedback feedback) {
        this.feedback = feedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("learnerEmail")
    public String learnerEmail;
    public ActivityAttemptOpenResponse withLearnerEmail(String learnerEmail) {
        this.learnerEmail = learnerEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offeringId")
    public String offeringId;
    public ActivityAttemptOpenResponse withOfferingId(String offeringId) {
        this.offeringId = offeringId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseText")
    public String responseText;
    public ActivityAttemptOpenResponse withResponseText(String responseText) {
        this.responseText = responseText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploadedFiles")
    public ActivityAttemptOpenResponseFiles uploadedFiles;
    public ActivityAttemptOpenResponse withUploadedFiles(ActivityAttemptOpenResponseFiles uploadedFiles) {
        this.uploadedFiles = uploadedFiles;
        return this;
    }
}