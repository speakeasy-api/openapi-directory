package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DayPart
 * Defines targeting for a period of time on a specific week day.
**/
public class DayPart {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayOfWeek")
    public DayPartDayOfWeekEnum dayOfWeek;
    public DayPart withDayOfWeek(DayPartDayOfWeekEnum dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public TimeOfDay endTime;
    public DayPart withEndTime(TimeOfDay endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public TimeOfDay startTime;
    public DayPart withStartTime(TimeOfDay startTime) {
        this.startTime = startTime;
        return this;
    }
}