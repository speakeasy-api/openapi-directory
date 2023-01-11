package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueueStats
 * Statistics for a queue.
**/
public class QueueStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("concurrentDispatchesCount")
    public String concurrentDispatchesCount;
    public QueueStats withConcurrentDispatchesCount(String concurrentDispatchesCount) {
        this.concurrentDispatchesCount = concurrentDispatchesCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveExecutionRate")
    public Double effectiveExecutionRate;
    public QueueStats withEffectiveExecutionRate(Double effectiveExecutionRate) {
        this.effectiveExecutionRate = effectiveExecutionRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executedLastMinuteCount")
    public String executedLastMinuteCount;
    public QueueStats withExecutedLastMinuteCount(String executedLastMinuteCount) {
        this.executedLastMinuteCount = executedLastMinuteCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oldestEstimatedArrivalTime")
    public String oldestEstimatedArrivalTime;
    public QueueStats withOldestEstimatedArrivalTime(String oldestEstimatedArrivalTime) {
        this.oldestEstimatedArrivalTime = oldestEstimatedArrivalTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasksCount")
    public String tasksCount;
    public QueueStats withTasksCount(String tasksCount) {
        this.tasksCount = tasksCount;
        return this;
    }
}