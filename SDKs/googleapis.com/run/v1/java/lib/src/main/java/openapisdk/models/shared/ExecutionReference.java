package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecutionReference
 * Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status.
**/
public class ExecutionReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completionTimestamp")
    public String completionTimestamp;
    public ExecutionReference withCompletionTimestamp(String completionTimestamp) {
        this.completionTimestamp = completionTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTimestamp")
    public String creationTimestamp;
    public ExecutionReference withCreationTimestamp(String creationTimestamp) {
        this.creationTimestamp = creationTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ExecutionReference withName(String name) {
        this.name = name;
        return this;
    }
}