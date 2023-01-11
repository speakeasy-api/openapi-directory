package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DayPartTargeting
 * Day Part Targeting.
**/
public class DayPartTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("daysOfWeek")
    public DayPartTargetingDaysOfWeekEnum[] daysOfWeek;
    public DayPartTargeting withDaysOfWeek(DayPartTargetingDaysOfWeekEnum[] daysOfWeek) {
        this.daysOfWeek = daysOfWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hoursOfDay")
    public Integer[] hoursOfDay;
    public DayPartTargeting withHoursOfDay(Integer[] hoursOfDay) {
        this.hoursOfDay = hoursOfDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userLocalTime")
    public Boolean userLocalTime;
    public DayPartTargeting withUserLocalTime(Boolean userLocalTime) {
        this.userLocalTime = userLocalTime;
        return this;
    }
}