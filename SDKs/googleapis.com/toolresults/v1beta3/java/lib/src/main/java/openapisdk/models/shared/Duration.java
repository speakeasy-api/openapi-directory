package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Duration
 *  A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years.
**/
public class Duration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nanos")
    public Integer nanos;
    public Duration withNanos(Integer nanos) {
        this.nanos = nanos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seconds")
    public String seconds;
    public Duration withSeconds(String seconds) {
        this.seconds = seconds;
        return this;
    }
}