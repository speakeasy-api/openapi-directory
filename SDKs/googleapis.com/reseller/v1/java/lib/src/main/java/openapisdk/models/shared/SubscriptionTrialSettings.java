package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionTrialSettings
 * The G Suite annual commitment and flexible payment plans can be in a 30-day free trial. For more information, see the API concepts.
**/
public class SubscriptionTrialSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isInTrial")
    public Boolean isInTrial;
    public SubscriptionTrialSettings withIsInTrial(Boolean isInTrial) {
        this.isInTrial = isInTrial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trialEndTime")
    public String trialEndTime;
    public SubscriptionTrialSettings withTrialEndTime(String trialEndTime) {
        this.trialEndTime = trialEndTime;
        return this;
    }
}