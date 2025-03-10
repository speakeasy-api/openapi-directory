/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleTypeTimeOfDay - Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
 */
public class GoogleTypeTimeOfDay {
    /**
     * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours")
    public Integer hours;

    public GoogleTypeTimeOfDay withHours(Integer hours) {
        this.hours = hours;
        return this;
    }
    
    /**
     * Minutes of hour of day. Must be from 0 to 59.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minutes")
    public Integer minutes;

    public GoogleTypeTimeOfDay withMinutes(Integer minutes) {
        this.minutes = minutes;
        return this;
    }
    
    /**
     * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nanos")
    public Integer nanos;

    public GoogleTypeTimeOfDay withNanos(Integer nanos) {
        this.nanos = nanos;
        return this;
    }
    
    /**
     * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seconds")
    public Integer seconds;

    public GoogleTypeTimeOfDay withSeconds(Integer seconds) {
        this.seconds = seconds;
        return this;
    }
    
    public GoogleTypeTimeOfDay(){}
}
