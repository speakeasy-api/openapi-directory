package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StatusEvent
 * Status event
**/
public class StatusEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public StatusEvent withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTime")
    public String eventTime;
    public StatusEvent withEventTime(String eventTime) {
        this.eventTime = eventTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskExecution")
    public TaskExecution taskExecution;
    public StatusEvent withTaskExecution(TaskExecution taskExecution) {
        this.taskExecution = taskExecution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public StatusEvent withType(String type) {
        this.type = type;
        return this;
    }
}