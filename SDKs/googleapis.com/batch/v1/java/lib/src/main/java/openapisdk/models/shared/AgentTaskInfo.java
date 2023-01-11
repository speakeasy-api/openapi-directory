package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AgentTaskInfo
 * Task Info
**/
public class AgentTaskInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runnable")
    public String runnable;
    public AgentTaskInfo withRunnable(String runnable) {
        this.runnable = runnable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskId")
    public String taskId;
    public AgentTaskInfo withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskStatus")
    public TaskStatus taskStatus;
    public AgentTaskInfo withTaskStatus(TaskStatus taskStatus) {
        this.taskStatus = taskStatus;
        return this;
    }
}