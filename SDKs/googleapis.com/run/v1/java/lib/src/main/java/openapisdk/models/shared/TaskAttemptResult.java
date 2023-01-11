package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskAttemptResult
 * Result of a task attempt.
**/
public class TaskAttemptResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exitCode")
    public Integer exitCode;
    public TaskAttemptResult withExitCode(Integer exitCode) {
        this.exitCode = exitCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GoogleRpcStatus status;
    public TaskAttemptResult withStatus(GoogleRpcStatus status) {
        this.status = status;
        return this;
    }
}