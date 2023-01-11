package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobStatus
 * Job status.
**/
public class JobStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runDuration")
    public String runDuration;
    public JobStatus withRunDuration(String runDuration) {
        this.runDuration = runDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public JobStatusStateEnum state;
    public JobStatus withState(JobStatusStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusEvents")
    public StatusEvent[] statusEvents;
    public JobStatus withStatusEvents(StatusEvent[] statusEvents) {
        this.statusEvents = statusEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskGroups")
    public java.util.Map<String, TaskGroupStatus> taskGroups;
    public JobStatus withTaskGroups(java.util.Map<String, TaskGroupStatus> taskGroups) {
        this.taskGroups = taskGroups;
        return this;
    }
}