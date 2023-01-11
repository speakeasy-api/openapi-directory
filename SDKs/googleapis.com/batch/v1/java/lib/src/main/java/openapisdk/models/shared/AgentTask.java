package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AgentTask
 * TODO(b/182501497) The message needs to be redefined when the Agent API server updates data in storage per the backend design.
**/
public class AgentTask {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intendedState")
    public AgentTaskIntendedStateEnum intendedState;
    public AgentTask withIntendedState(AgentTaskIntendedStateEnum intendedState) {
        this.intendedState = intendedState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reachedBarrier")
    public String reachedBarrier;
    public AgentTask withReachedBarrier(String reachedBarrier) {
        this.reachedBarrier = reachedBarrier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public TaskSpec spec;
    public AgentTask withSpec(TaskSpec spec) {
        this.spec = spec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TaskStatus status;
    public AgentTask withStatus(TaskStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task")
    public String task;
    public AgentTask withTask(String task) {
        this.task = task;
        return this;
    }
}