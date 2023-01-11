package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManualTrigger
 * A single manual trigger in Display & Video 360.
**/
public class ManualTrigger {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activationDurationMinutes")
    public String activationDurationMinutes;
    public ManualTrigger withActivationDurationMinutes(String activationDurationMinutes) {
        this.activationDurationMinutes = activationDurationMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public ManualTrigger withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ManualTrigger withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestActivationTime")
    public String latestActivationTime;
    public ManualTrigger withLatestActivationTime(String latestActivationTime) {
        this.latestActivationTime = latestActivationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ManualTrigger withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ManualTriggerStateEnum state;
    public ManualTrigger withState(ManualTriggerStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerId")
    public String triggerId;
    public ManualTrigger withTriggerId(String triggerId) {
        this.triggerId = triggerId;
        return this;
    }
}