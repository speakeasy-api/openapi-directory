package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskStatus
 * Status of a task
**/
public class TaskStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public TaskStatusStateEnum state;
    public TaskStatus withState(TaskStatusStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusEvents")
    public StatusEvent[] statusEvents;
    public TaskStatus withStatusEvents(StatusEvent[] statusEvents) {
        this.statusEvents = statusEvents;
        return this;
    }
}