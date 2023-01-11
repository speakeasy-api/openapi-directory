package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Schedule
 * Scan schedule configuration.
**/
public class Schedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intervalDurationDays")
    public Integer intervalDurationDays;
    public Schedule withIntervalDurationDays(Integer intervalDurationDays) {
        this.intervalDurationDays = intervalDurationDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleTime")
    public String scheduleTime;
    public Schedule withScheduleTime(String scheduleTime) {
        this.scheduleTime = scheduleTime;
        return this;
    }
}