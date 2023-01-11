package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HourlyMetrics
 * Metrics for an hour.
**/
public class HourlyMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hour")
    public Integer hour;
    public HourlyMetrics withHour(Integer hour) {
        this.hour = hour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("missedCallsCount")
    public Integer missedCallsCount;
    public HourlyMetrics withMissedCallsCount(Integer missedCallsCount) {
        this.missedCallsCount = missedCallsCount;
        return this;
    }
}