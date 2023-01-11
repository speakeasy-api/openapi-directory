package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MaintenanceSchedule
 * Upcoming maintenance schedule.
**/
public class MaintenanceSchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public MaintenanceSchedule withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleDeadlineTime")
    public String scheduleDeadlineTime;
    public MaintenanceSchedule withScheduleDeadlineTime(String scheduleDeadlineTime) {
        this.scheduleDeadlineTime = scheduleDeadlineTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public MaintenanceSchedule withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}