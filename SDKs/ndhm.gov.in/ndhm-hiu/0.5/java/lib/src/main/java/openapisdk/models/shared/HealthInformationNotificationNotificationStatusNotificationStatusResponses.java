package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HealthInformationNotificationNotificationStatusNotificationStatusResponses {
    @JsonProperty("careContextReference")
    public String careContextReference;
    public HealthInformationNotificationNotificationStatusNotificationStatusResponses withCareContextReference(String careContextReference) {
        this.careContextReference = careContextReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public HealthInformationNotificationNotificationStatusNotificationStatusResponses withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("hiStatus")
    public HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum hiStatus;
    public HealthInformationNotificationNotificationStatusNotificationStatusResponses withHiStatus(HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum hiStatus) {
        this.hiStatus = hiStatus;
        return this;
    }
}