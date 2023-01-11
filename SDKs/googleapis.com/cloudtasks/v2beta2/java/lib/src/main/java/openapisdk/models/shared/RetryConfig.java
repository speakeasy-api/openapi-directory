package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RetryConfig
 * Retry config. These settings determine how a failed task attempt is retried.
**/
public class RetryConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxAttempts")
    public Integer maxAttempts;
    public RetryConfig withMaxAttempts(Integer maxAttempts) {
        this.maxAttempts = maxAttempts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxBackoff")
    public String maxBackoff;
    public RetryConfig withMaxBackoff(String maxBackoff) {
        this.maxBackoff = maxBackoff;
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
    @JsonProperty("minBackoff")
    public String minBackoff;
    public RetryConfig withMinBackoff(String minBackoff) {
        this.minBackoff = minBackoff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unlimitedAttempts")
    public Boolean unlimitedAttempts;
    public RetryConfig withUnlimitedAttempts(Boolean unlimitedAttempts) {
        this.unlimitedAttempts = unlimitedAttempts;
        return this;
    }
}