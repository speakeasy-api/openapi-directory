package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2TaskAttemptResult
 * Result of a task attempt.
**/
public class GoogleCloudRunV2TaskAttemptResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exitCode")
    public Integer exitCode;
    public GoogleCloudRunV2TaskAttemptResult withExitCode(Integer exitCode) {
        this.exitCode = exitCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GoogleRpcStatus status;
    public GoogleCloudRunV2TaskAttemptResult withStatus(GoogleRpcStatus status) {
        this.status = status;
        return this;
    }
}