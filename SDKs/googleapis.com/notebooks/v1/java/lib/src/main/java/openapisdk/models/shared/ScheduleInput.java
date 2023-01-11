package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScheduleInput
 * The definition of a schedule.
**/
public class ScheduleInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cronSchedule")
    public String cronSchedule;
    public ScheduleInput withCronSchedule(String cronSchedule) {
        this.cronSchedule = cronSchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ScheduleInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionTemplate")
    public ExecutionTemplate executionTemplate;
    public ScheduleInput withExecutionTemplate(ExecutionTemplate executionTemplate) {
        this.executionTemplate = executionTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ScheduleStateEnum state;
    public ScheduleInput withState(ScheduleStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public ScheduleInput withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}