package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceAttemptResult
 * Result of an instance attempt.
**/
public class InstanceAttemptResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exitCode")
    public Integer exitCode;
    public InstanceAttemptResult withExitCode(Integer exitCode) {
        this.exitCode = exitCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GoogleRpcStatus status;
    public InstanceAttemptResult withStatus(GoogleRpcStatus status) {
        this.status = status;
        return this;
    }
}