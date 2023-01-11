package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ThrottlingSettings
 * Configuration details for webhook throttling.
**/
public class ThrottlingSettings {
    @JsonProperty("maxConcurrentRequests")
    public Integer maxConcurrentRequests;
    public ThrottlingSettings withMaxConcurrentRequests(Integer maxConcurrentRequests) {
        this.maxConcurrentRequests = maxConcurrentRequests;
        return this;
    }
    @JsonProperty("period")
    public ThrottlingSettingsPeriodEnum period;
    public ThrottlingSettings withPeriod(ThrottlingSettingsPeriodEnum period) {
        this.period = period;
        return this;
    }
}