package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskStatus
 * TaskStatus represents the status of a task.
**/
public class TaskStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completionTime")
    public String completionTime;
    public TaskStatus withCompletionTime(String completionTime) {
        this.completionTime = completionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public GoogleCloudRunV1Condition[] conditions;
    public TaskStatus withConditions(GoogleCloudRunV1Condition[] conditions) {
        this.conditions = conditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Integer index;
    public TaskStatus withIndex(Integer index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastAttemptResult")
    public TaskAttemptResult lastAttemptResult;
    public TaskStatus withLastAttemptResult(TaskAttemptResult lastAttemptResult) {
        this.lastAttemptResult = lastAttemptResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logUri")
    public String logUri;
    public TaskStatus withLogUri(String logUri) {
        this.logUri = logUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observedGeneration")
    public Integer observedGeneration;
    public TaskStatus withObservedGeneration(Integer observedGeneration) {
        this.observedGeneration = observedGeneration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retried")
    public Integer retried;
    public TaskStatus withRetried(Integer retried) {
        this.retried = retried;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public TaskStatus withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}