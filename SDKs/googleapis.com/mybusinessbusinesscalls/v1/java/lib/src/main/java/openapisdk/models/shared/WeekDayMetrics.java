package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WeekDayMetrics
 * Metrics for a week day.
**/
public class WeekDayMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("day")
    public WeekDayMetricsDayEnum day;
    public WeekDayMetrics withDay(WeekDayMetricsDayEnum day) {
        this.day = day;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("missedCallsCount")
    public Integer missedCallsCount;
    public WeekDayMetrics withMissedCallsCount(Integer missedCallsCount) {
        this.missedCallsCount = missedCallsCount;
        return this;
    }
}