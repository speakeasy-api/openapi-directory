package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskStatus
 * Status of the task.
**/
public class TaskStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attemptDispatchCount")
    public Integer attemptDispatchCount;
    public TaskStatus withAttemptDispatchCount(Integer attemptDispatchCount) {
        this.attemptDispatchCount = attemptDispatchCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attemptResponseCount")
    public Integer attemptResponseCount;
    public TaskStatus withAttemptResponseCount(Integer attemptResponseCount) {
        this.attemptResponseCount = attemptResponseCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstAttemptStatus")
    public AttemptStatus firstAttemptStatus;
    public TaskStatus withFirstAttemptStatus(AttemptStatus firstAttemptStatus) {
        this.firstAttemptStatus = firstAttemptStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastAttemptStatus")
    public AttemptStatus lastAttemptStatus;
    public TaskStatus withLastAttemptStatus(AttemptStatus lastAttemptStatus) {
        this.lastAttemptStatus = lastAttemptStatus;
        return this;
    }
}