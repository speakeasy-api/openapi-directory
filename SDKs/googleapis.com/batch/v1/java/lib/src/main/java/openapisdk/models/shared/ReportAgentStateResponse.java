package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportAgentStateResponse
 * Response to ReportAgentStateRequest.
**/
public class ReportAgentStateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks")
    public AgentTask[] tasks;
    public ReportAgentStateResponse withTasks(AgentTask[] tasks) {
        this.tasks = tasks;
        return this;
    }
}