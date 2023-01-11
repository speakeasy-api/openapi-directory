package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeOfDay
 * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
**/
public class TimeOfDay {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours")
    public Integer hours;
    public TimeOfDay withHours(Integer hours) {
        this.hours = hours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minutes")
    public Integer minutes;
    public TimeOfDay withMinutes(Integer minutes) {
        this.minutes = minutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nanos")
    public Integer nanos;
    public TimeOfDay withNanos(Integer nanos) {
        this.nanos = nanos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seconds")
    public Integer seconds;
    public TimeOfDay withSeconds(Integer seconds) {
        this.seconds = seconds;
        return this;
    }
}