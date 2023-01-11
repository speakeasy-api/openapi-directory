package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ToolResultsExecution
 * Represents a tool results execution resource. This has the results of a TestMatrix.
**/
public class ToolResultsExecution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionId")
    public String executionId;
    public ToolResultsExecution withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("historyId")
    public String historyId;
    public ToolResultsExecution withHistoryId(String historyId) {
        this.historyId = historyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public ToolResultsExecution withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}