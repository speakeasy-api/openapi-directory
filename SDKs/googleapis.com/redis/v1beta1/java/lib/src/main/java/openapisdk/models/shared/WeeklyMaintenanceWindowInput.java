package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WeeklyMaintenanceWindowInput
 * Time window in which disruptive maintenance updates occur. Non-disruptive updates can occur inside or outside this window.
**/
public class WeeklyMaintenanceWindowInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("day")
    public WeeklyMaintenanceWindowDayEnum day;
    public WeeklyMaintenanceWindowInput withDay(WeeklyMaintenanceWindowDayEnum day) {
        this.day = day;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public TimeOfDay startTime;
    public WeeklyMaintenanceWindowInput withStartTime(TimeOfDay startTime) {
        this.startTime = startTime;
        return this;
    }
}