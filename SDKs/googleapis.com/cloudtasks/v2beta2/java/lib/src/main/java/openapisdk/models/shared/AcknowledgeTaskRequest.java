package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AcknowledgeTaskRequest
 * Request message for acknowledging a task using AcknowledgeTask.
**/
public class AcknowledgeTaskRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleTime")
    public String scheduleTime;
    public AcknowledgeTaskRequest withScheduleTime(String scheduleTime) {
        this.scheduleTime = scheduleTime;
        return this;
    }
}