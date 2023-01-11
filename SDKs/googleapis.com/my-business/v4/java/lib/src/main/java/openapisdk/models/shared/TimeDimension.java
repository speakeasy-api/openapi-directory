package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeDimension
 * The dimension for which data is divided over.
**/
public class TimeDimension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayOfWeek")
    public TimeDimensionDayOfWeekEnum dayOfWeek;
    public TimeDimension withDayOfWeek(TimeDimensionDayOfWeekEnum dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeOfDay")
    public TimeOfDay timeOfDay;
    public TimeDimension withTimeOfDay(TimeOfDay timeOfDay) {
        this.timeOfDay = timeOfDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeRange")
    public TimeRange timeRange;
    public TimeDimension withTimeRange(TimeRange timeRange) {
        this.timeRange = timeRange;
        return this;
    }
}