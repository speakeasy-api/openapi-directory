package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MonthlySchedule
 * Represents a monthly schedule. An example of a valid monthly schedule is "on the third Tuesday of the month" or "on the 15th of the month".
**/
public class MonthlySchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthDay")
    public Integer monthDay;
    public MonthlySchedule withMonthDay(Integer monthDay) {
        this.monthDay = monthDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weekDayOfMonth")
    public WeekDayOfMonth weekDayOfMonth;
    public MonthlySchedule withWeekDayOfMonth(WeekDayOfMonth weekDayOfMonth) {
        this.weekDayOfMonth = weekDayOfMonth;
        return this;
    }
}