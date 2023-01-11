package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueueingPolicy
 * Defines the policy of the QueuedRequest.
**/
public class QueueingPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validAfterDuration")
    public String validAfterDuration;
    public QueueingPolicy withValidAfterDuration(String validAfterDuration) {
        this.validAfterDuration = validAfterDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validAfterTime")
    public String validAfterTime;
    public QueueingPolicy withValidAfterTime(String validAfterTime) {
        this.validAfterTime = validAfterTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validInterval")
    public Interval validInterval;
    public QueueingPolicy withValidInterval(Interval validInterval) {
        this.validInterval = validInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validUntilDuration")
    public String validUntilDuration;
    public QueueingPolicy withValidUntilDuration(String validUntilDuration) {
        this.validUntilDuration = validUntilDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validUntilTime")
    public String validUntilTime;
    public QueueingPolicy withValidUntilTime(String validUntilTime) {
        this.validUntilTime = validUntilTime;
        return this;
    }
}