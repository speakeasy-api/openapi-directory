package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AggregateMetrics
 * Metrics aggregated over the input time range.
**/
public class AggregateMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answeredCallsCount")
    public Integer answeredCallsCount;
    public AggregateMetrics withAnsweredCallsCount(Integer answeredCallsCount) {
        this.answeredCallsCount = answeredCallsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public Date endDate;
    public AggregateMetrics withEndDate(Date endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hourlyMetrics")
    public HourlyMetrics[] hourlyMetrics;
    public AggregateMetrics withHourlyMetrics(HourlyMetrics[] hourlyMetrics) {
        this.hourlyMetrics = hourlyMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("missedCallsCount")
    public Integer missedCallsCount;
    public AggregateMetrics withMissedCallsCount(Integer missedCallsCount) {
        this.missedCallsCount = missedCallsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public Date startDate;
    public AggregateMetrics withStartDate(Date startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weekdayMetrics")
    public WeekDayMetrics[] weekdayMetrics;
    public AggregateMetrics withWeekdayMetrics(WeekDayMetrics[] weekdayMetrics) {
        this.weekdayMetrics = weekdayMetrics;
        return this;
    }
}