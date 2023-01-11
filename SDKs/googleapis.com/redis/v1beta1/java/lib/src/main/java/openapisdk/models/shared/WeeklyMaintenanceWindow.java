package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WeeklyMaintenanceWindow
 * Time window in which disruptive maintenance updates occur. Non-disruptive updates can occur inside or outside this window.
**/
public class WeeklyMaintenanceWindow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("day")
    public WeeklyMaintenanceWindowDayEnum day;
    public WeeklyMaintenanceWindow withDay(WeeklyMaintenanceWindowDayEnum day) {
        this.day = day;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public WeeklyMaintenanceWindow withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public TimeOfDay startTime;
    public WeeklyMaintenanceWindow withStartTime(TimeOfDay startTime) {
        this.startTime = startTime;
        return this;
    }
}