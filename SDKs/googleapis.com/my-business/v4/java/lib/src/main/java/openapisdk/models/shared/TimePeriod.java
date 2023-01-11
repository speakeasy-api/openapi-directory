package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimePeriod
 * Represents a span of time that the business is open, starting on the specified open day/time and closing on the specified close day/time. The closing time must occur after the opening time, for example later in the same day, or on a subsequent day.
**/
public class TimePeriod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closeDay")
    public TimePeriodCloseDayEnum closeDay;
    public TimePeriod withCloseDay(TimePeriodCloseDayEnum closeDay) {
        this.closeDay = closeDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closeTime")
    public String closeTime;
    public TimePeriod withCloseTime(String closeTime) {
        this.closeTime = closeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openDay")
    public TimePeriodOpenDayEnum openDay;
    public TimePeriod withOpenDay(TimePeriodOpenDayEnum openDay) {
        this.openDay = openDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openTime")
    public String openTime;
    public TimePeriod withOpenTime(String openTime) {
        this.openTime = openTime;
        return this;
    }
}