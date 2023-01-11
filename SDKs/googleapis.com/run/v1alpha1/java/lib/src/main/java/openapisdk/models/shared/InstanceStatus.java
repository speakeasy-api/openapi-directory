package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceStatus
 * Instance represents the status of an instance of a Job.
**/
public class InstanceStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completionTime")
    public String completionTime;
    public InstanceStatus withCompletionTime(String completionTime) {
        this.completionTime = completionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failed")
    public Integer failed;
    public InstanceStatus withFailed(Integer failed) {
        this.failed = failed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Integer index;
    public InstanceStatus withIndex(Integer index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastAttemptResult")
    public InstanceAttemptResult lastAttemptResult;
    public InstanceStatus withLastAttemptResult(InstanceAttemptResult lastAttemptResult) {
        this.lastAttemptResult = lastAttemptResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastExitCode")
    public Integer lastExitCode;
    public InstanceStatus withLastExitCode(Integer lastExitCode) {
        this.lastExitCode = lastExitCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restarted")
    public Integer restarted;
    public InstanceStatus withRestarted(Integer restarted) {
        this.restarted = restarted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public InstanceStatus withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("succeeded")
    public Integer succeeded;
    public InstanceStatus withSucceeded(Integer succeeded) {
        this.succeeded = succeeded;
        return this;
    }
}