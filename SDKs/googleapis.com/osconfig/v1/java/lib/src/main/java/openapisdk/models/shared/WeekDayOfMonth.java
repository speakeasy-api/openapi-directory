package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WeekDayOfMonth
 * Represents one week day in a month. An example is "the 4th Sunday".
**/
public class WeekDayOfMonth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayOfWeek")
    public WeekDayOfMonthDayOfWeekEnum dayOfWeek;
    public WeekDayOfMonth withDayOfWeek(WeekDayOfMonthDayOfWeekEnum dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayOffset")
    public Integer dayOffset;
    public WeekDayOfMonth withDayOffset(Integer dayOffset) {
        this.dayOffset = dayOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weekOrdinal")
    public Integer weekOrdinal;
    public WeekDayOfMonth withWeekOrdinal(Integer weekOrdinal) {
        this.weekOrdinal = weekOrdinal;
        return this;
    }
}