package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FrequencyCap
 * Frequency Cap.
**/
public class FrequencyCap {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public FrequencyCap withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impressions")
    public String impressions;
    public FrequencyCap withImpressions(String impressions) {
        this.impressions = impressions;
        return this;
    }
}