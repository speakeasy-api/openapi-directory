package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Queue1
 * A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, queue types, and others.
**/
public class Queue1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appEngineHttpQueue")
    public AppEngineHttpQueue appEngineHttpQueue;
    public Queue1 withAppEngineHttpQueue(AppEngineHttpQueue appEngineHttpQueue) {
        this.appEngineHttpQueue = appEngineHttpQueue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Queue1 withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purgeTime")
    public String purgeTime;
    public Queue1 withPurgeTime(String purgeTime) {
        this.purgeTime = purgeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateLimits")
    public RateLimits rateLimits;
    public Queue1 withRateLimits(RateLimits rateLimits) {
        this.rateLimits = rateLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryConfig")
    public RetryConfig retryConfig;
    public Queue1 withRetryConfig(RetryConfig retryConfig) {
        this.retryConfig = retryConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stackdriverLoggingConfig")
    public StackdriverLoggingConfig stackdriverLoggingConfig;
    public Queue1 withStackdriverLoggingConfig(StackdriverLoggingConfig stackdriverLoggingConfig) {
        this.stackdriverLoggingConfig = stackdriverLoggingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public QueueStateEnum state;
    public Queue1 withState(QueueStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stats")
    public QueueStats stats;
    public Queue1 withStats(QueueStats stats) {
        this.stats = stats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskTtl")
    public String taskTtl;
    public Queue1 withTaskTtl(String taskTtl) {
        this.taskTtl = taskTtl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tombstoneTtl")
    public String tombstoneTtl;
    public Queue1 withTombstoneTtl(String tombstoneTtl) {
        this.tombstoneTtl = tombstoneTtl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public QueueTypeEnum type;
    public Queue1 withType(QueueTypeEnum type) {
        this.type = type;
        return this;
    }
}