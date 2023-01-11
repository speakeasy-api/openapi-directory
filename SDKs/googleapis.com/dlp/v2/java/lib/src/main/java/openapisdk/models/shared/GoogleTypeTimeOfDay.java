package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleTypeTimeOfDay
 * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
**/
public class GoogleTypeTimeOfDay {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours")
    public Integer hours;
    public GoogleTypeTimeOfDay withHours(Integer hours) {
        this.hours = hours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minutes")
    public Integer minutes;
    public GoogleTypeTimeOfDay withMinutes(Integer minutes) {
        this.minutes = minutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nanos")
    public Integer nanos;
    public GoogleTypeTimeOfDay withNanos(Integer nanos) {
        this.nanos = nanos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seconds")
    public Integer seconds;
    public GoogleTypeTimeOfDay withSeconds(Integer seconds) {
        this.seconds = seconds;
        return this;
    }
}