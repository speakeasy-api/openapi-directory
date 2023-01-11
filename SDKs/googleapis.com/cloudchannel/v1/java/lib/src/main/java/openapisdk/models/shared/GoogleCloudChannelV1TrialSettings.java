package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1TrialSettings
 * Settings for trial offers.
**/
public class GoogleCloudChannelV1TrialSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public GoogleCloudChannelV1TrialSettings withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trial")
    public Boolean trial;
    public GoogleCloudChannelV1TrialSettings withTrial(Boolean trial) {
        this.trial = trial;
        return this;
    }
}