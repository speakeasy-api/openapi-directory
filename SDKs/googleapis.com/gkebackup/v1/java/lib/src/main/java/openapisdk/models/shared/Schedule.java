package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Schedule
 * Schedule defines scheduling parameters for automatically creating Backups via this BackupPlan.
**/
public class Schedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cronSchedule")
    public String cronSchedule;
    public Schedule withCronSchedule(String cronSchedule) {
        this.cronSchedule = cronSchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paused")
    public Boolean paused;
    public Schedule withPaused(Boolean paused) {
        this.paused = paused;
        return this;
    }
}