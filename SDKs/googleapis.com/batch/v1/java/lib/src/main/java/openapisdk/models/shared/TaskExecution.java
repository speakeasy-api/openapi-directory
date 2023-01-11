package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskExecution
 * This Task Execution field includes detail information for task execution procedures, based on StatusEvent types.
**/
public class TaskExecution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exitCode")
    public Integer exitCode;
    public TaskExecution withExitCode(Integer exitCode) {
        this.exitCode = exitCode;
        return this;
    }
}