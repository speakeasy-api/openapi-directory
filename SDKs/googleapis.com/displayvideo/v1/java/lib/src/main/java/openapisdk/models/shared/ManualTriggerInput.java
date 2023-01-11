package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManualTriggerInput
 * A single manual trigger in Display & Video 360.
**/
public class ManualTriggerInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activationDurationMinutes")
    public String activationDurationMinutes;
    public ManualTriggerInput withActivationDurationMinutes(String activationDurationMinutes) {
        this.activationDurationMinutes = activationDurationMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public ManualTriggerInput withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ManualTriggerInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}