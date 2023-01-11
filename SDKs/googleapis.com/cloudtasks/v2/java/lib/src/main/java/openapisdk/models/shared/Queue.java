package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Queue
 * A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, queue types, and others.
**/
public class Queue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appEngineRoutingOverride")
    public AppEngineRouting appEngineRoutingOverride;
    public Queue withAppEngineRoutingOverride(AppEngineRouting appEngineRoutingOverride) {
        this.appEngineRoutingOverride = appEngineRoutingOverride;
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
    @JsonProperty("stackdriverLoggingConfig")
    public StackdriverLoggingConfig stackdriverLoggingConfig;
    public Queue withStackdriverLoggingConfig(StackdriverLoggingConfig stackdriverLoggingConfig) {
        this.stackdriverLoggingConfig = stackdriverLoggingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public QueueStateEnum state;
    public Queue withState(QueueStateEnum state) {
        this.state = state;
        return this;
    }
}