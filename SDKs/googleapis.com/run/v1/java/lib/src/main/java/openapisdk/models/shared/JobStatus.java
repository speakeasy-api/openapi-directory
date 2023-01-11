package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobStatus
 * JobStatus represents the current state of a Job.
**/
public class JobStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public GoogleCloudRunV1Condition[] conditions;
    public JobStatus withConditions(GoogleCloudRunV1Condition[] conditions) {
        this.conditions = conditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionCount")
    public Integer executionCount;
    public JobStatus withExecutionCount(Integer executionCount) {
        this.executionCount = executionCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestCreatedExecution")
    public ExecutionReference latestCreatedExecution;
    public JobStatus withLatestCreatedExecution(ExecutionReference latestCreatedExecution) {
        this.latestCreatedExecution = latestCreatedExecution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observedGeneration")
    public Integer observedGeneration;
    public JobStatus withObservedGeneration(Integer observedGeneration) {
        this.observedGeneration = observedGeneration;
        return this;
    }
}