package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Queue
 * A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, target types, and others.
**/
public class Queue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appEngineHttpTarget")
    public AppEngineHttpTarget appEngineHttpTarget;
    public Queue withAppEngineHttpTarget(AppEngineHttpTarget appEngineHttpTarget) {
        this.appEngineHttpTarget = appEngineHttpTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpTarget")
    public HttpTarget httpTarget;
    public Queue withHttpTarget(HttpTarget httpTarget) {
        this.httpTarget = httpTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Queue withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pullTarget")
    public java.util.Map<String, Object> pullTarget;
    public Queue withPullTarget(java.util.Map<String, Object> pullTarget) {
        this.pullTarget = pullTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purgeTime")
    public String purgeTime;
    public Queue withPurgeTime(String purgeTime) {
        this.purgeTime = purgeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateLimits")
    public RateLimits rateLimits;
    public Queue withRateLimits(RateLimits rateLimits) {
        this.rateLimits = rateLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryConfig")
    public RetryConfig retryConfig;
    public Queue withRetryConfig(RetryConfig retryConfig) {
        this.retryConfig = retryConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public QueueStateEnum state;
    public Queue withState(QueueStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskTtl")
    public String taskTtl;
    public Queue withTaskTtl(String taskTtl) {
        this.taskTtl = taskTtl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tombstoneTtl")
    public String tombstoneTtl;
    public Queue withTombstoneTtl(String tombstoneTtl) {
        this.tombstoneTtl = tombstoneTtl;
        return this;
    }
}