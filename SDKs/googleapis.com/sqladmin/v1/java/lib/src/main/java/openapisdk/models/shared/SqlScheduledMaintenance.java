package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SqlScheduledMaintenance
 * Any scheduled maintenance for this instance.
**/
public class SqlScheduledMaintenance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDefer")
    public Boolean canDefer;
    public SqlScheduledMaintenance withCanDefer(Boolean canDefer) {
        this.canDefer = canDefer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canReschedule")
    public Boolean canReschedule;
    public SqlScheduledMaintenance withCanReschedule(Boolean canReschedule) {
        this.canReschedule = canReschedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleDeadlineTime")
    public String scheduleDeadlineTime;
    public SqlScheduledMaintenance withScheduleDeadlineTime(String scheduleDeadlineTime) {
        this.scheduleDeadlineTime = scheduleDeadlineTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public SqlScheduledMaintenance withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}