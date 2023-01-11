package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecutionStatus
 * ExecutionStatus represents the current state of an Execution.
**/
public class ExecutionStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelledCount")
    public Integer cancelledCount;
    public ExecutionStatus withCancelledCount(Integer cancelledCount) {
        this.cancelledCount = cancelledCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completionTime")
    public String completionTime;
    public ExecutionStatus withCompletionTime(String completionTime) {
        this.completionTime = completionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public GoogleCloudRunV1Condition[] conditions;
    public ExecutionStatus withConditions(GoogleCloudRunV1Condition[] conditions) {
        this.conditions = conditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedCount")
    public Integer failedCount;
    public ExecutionStatus withFailedCount(Integer failedCount) {
        this.failedCount = failedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logUri")
    public String logUri;
    public ExecutionStatus withLogUri(String logUri) {
        this.logUri = logUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observedGeneration")
    public Integer observedGeneration;
    public ExecutionStatus withObservedGeneration(Integer observedGeneration) {
        this.observedGeneration = observedGeneration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retriedCount")
    public Integer retriedCount;
    public ExecutionStatus withRetriedCount(Integer retriedCount) {
        this.retriedCount = retriedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runningCount")
    public Integer runningCount;
    public ExecutionStatus withRunningCount(Integer runningCount) {
        this.runningCount = runningCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public ExecutionStatus withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("succeededCount")
    public Integer succeededCount;
    public ExecutionStatus withSucceededCount(Integer succeededCount) {
        this.succeededCount = succeededCount;
        return this;
    }
}