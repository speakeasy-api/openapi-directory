package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Timestamp
 * A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970.
**/
public class Timestamp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nanos")
    public Integer nanos;
    public Timestamp withNanos(Integer nanos) {
        this.nanos = nanos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seconds")
    public String seconds;
    public Timestamp withSeconds(String seconds) {
        this.seconds = seconds;
        return this;
    }
}