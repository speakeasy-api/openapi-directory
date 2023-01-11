package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WeeklySchedule
 * Represents a weekly schedule.
**/
public class WeeklySchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayOfWeek")
    public WeeklyScheduleDayOfWeekEnum dayOfWeek;
    public WeeklySchedule withDayOfWeek(WeeklyScheduleDayOfWeekEnum dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
        return this;
    }
}