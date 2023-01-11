package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RateLimits
 * Rate limits. This message determines the maximum rate that tasks can be dispatched by a queue, regardless of whether the dispatch is a first task attempt or a retry. Note: The debugging command, RunTask, will run a task even if the queue has reached its RateLimits.
**/
public class RateLimits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxBurstSize")
    public Integer maxBurstSize;
    public RateLimits withMaxBurstSize(Integer maxBurstSize) {
        this.maxBurstSize = maxBurstSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxConcurrentTasks")
    public Integer maxConcurrentTasks;
    public RateLimits withMaxConcurrentTasks(Integer maxConcurrentTasks) {
        this.maxConcurrentTasks = maxConcurrentTasks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxTasksDispatchedPerSecond")
    public Double maxTasksDispatchedPerSecond;
    public RateLimits withMaxTasksDispatchedPerSecond(Double maxTasksDispatchedPerSecond) {
        this.maxTasksDispatchedPerSecond = maxTasksDispatchedPerSecond;
        return this;
    }
}