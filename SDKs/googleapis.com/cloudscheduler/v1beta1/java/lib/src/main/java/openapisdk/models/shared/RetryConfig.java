package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RetryConfig
 * Settings that determine the retry behavior. By default, if a job does not complete successfully (meaning that an acknowledgement is not received from the handler, then it will be retried with exponential backoff according to the settings in RetryConfig.
**/
public class RetryConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxBackoffDuration")
    public String maxBackoffDuration;
    public RetryConfig withMaxBackoffDuration(String maxBackoffDuration) {
        this.maxBackoffDuration = maxBackoffDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxDoublings")
    public Integer maxDoublings;
    public RetryConfig withMaxDoublings(Integer maxDoublings) {
        this.maxDoublings = maxDoublings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxRetryDuration")
    public String maxRetryDuration;
    public RetryConfig withMaxRetryDuration(String maxRetryDuration) {
        this.maxRetryDuration = maxRetryDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minBackoffDuration")
    public String minBackoffDuration;
    public RetryConfig withMinBackoffDuration(String minBackoffDuration) {
        this.minBackoffDuration = minBackoffDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryCount")
    public Integer retryCount;
    public RetryConfig withRetryCount(Integer retryCount) {
        this.retryCount = retryCount;
        return this;
    }
}