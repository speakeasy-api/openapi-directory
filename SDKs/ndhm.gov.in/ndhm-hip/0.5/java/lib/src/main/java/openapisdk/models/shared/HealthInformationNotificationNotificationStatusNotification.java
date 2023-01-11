package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HealthInformationNotificationNotificationStatusNotification {
    @JsonProperty("hipId")
    public String hipId;
    public HealthInformationNotificationNotificationStatusNotification withHipId(String hipId) {
        this.hipId = hipId;
        return this;
    }
    @JsonProperty("sessionStatus")
    public HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum sessionStatus;
    public HealthInformationNotificationNotificationStatusNotification withSessionStatus(HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum sessionStatus) {
        this.sessionStatus = sessionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusResponses")
    public HealthInformationNotificationNotificationStatusNotificationStatusResponses[] statusResponses;
    public HealthInformationNotificationNotificationStatusNotification withStatusResponses(HealthInformationNotificationNotificationStatusNotificationStatusResponses[] statusResponses) {
        this.statusResponses = statusResponses;
        return this;
    }
}