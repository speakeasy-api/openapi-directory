package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FrequencyCap
 * Settings that control the number of times a user may be shown with the same ad during a given time period.
**/
public class FrequencyCap {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxImpressions")
    public Integer maxImpressions;
    public FrequencyCap withMaxImpressions(Integer maxImpressions) {
        this.maxImpressions = maxImpressions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeUnit")
    public FrequencyCapTimeUnitEnum timeUnit;
    public FrequencyCap withTimeUnit(FrequencyCapTimeUnitEnum timeUnit) {
        this.timeUnit = timeUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeUnitCount")
    public Integer timeUnitCount;
    public FrequencyCap withTimeUnitCount(Integer timeUnitCount) {
        this.timeUnitCount = timeUnitCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unlimited")
    public Boolean unlimited;
    public FrequencyCap withUnlimited(Boolean unlimited) {
        this.unlimited = unlimited;
        return this;
    }
}