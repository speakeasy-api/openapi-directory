package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MaintenanceSchedule
 * Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated.
**/
public class MaintenanceSchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canReschedule")
    public Boolean canReschedule;
    public MaintenanceSchedule withCanReschedule(Boolean canReschedule) {
        this.canReschedule = canReschedule;
        return this;
    }
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