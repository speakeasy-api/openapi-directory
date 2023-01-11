package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LookbackConfiguration
 * Lookback configuration settings.
**/
public class LookbackConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickDuration")
    public Integer clickDuration;
    public LookbackConfiguration withClickDuration(Integer clickDuration) {
        this.clickDuration = clickDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postImpressionActivitiesDuration")
    public Integer postImpressionActivitiesDuration;
    public LookbackConfiguration withPostImpressionActivitiesDuration(Integer postImpressionActivitiesDuration) {
        this.postImpressionActivitiesDuration = postImpressionActivitiesDuration;
        return this;
    }
}