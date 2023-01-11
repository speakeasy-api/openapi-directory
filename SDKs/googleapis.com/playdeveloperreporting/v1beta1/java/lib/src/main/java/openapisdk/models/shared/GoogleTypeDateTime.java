package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleTypeDateTime
 * Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.
**/
public class GoogleTypeDateTime {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("day")
    public Integer day;
    public GoogleTypeDateTime withDay(Integer day) {
        this.day = day;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours")
    public Integer hours;
    public GoogleTypeDateTime withHours(Integer hours) {
        this.hours = hours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minutes")
    public Integer minutes;
    public GoogleTypeDateTime withMinutes(Integer minutes) {
        this.minutes = minutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("month")
    public Integer month;
    public GoogleTypeDateTime withMonth(Integer month) {
        this.month = month;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nanos")
    public Integer nanos;
    public GoogleTypeDateTime withNanos(Integer nanos) {
        this.nanos = nanos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seconds")
    public Integer seconds;
    public GoogleTypeDateTime withSeconds(Integer seconds) {
        this.seconds = seconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public GoogleTypeTimeZone timeZone;
    public GoogleTypeDateTime withTimeZone(GoogleTypeTimeZone timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utcOffset")
    public String utcOffset;
    public GoogleTypeDateTime withUtcOffset(String utcOffset) {
        this.utcOffset = utcOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Integer year;
    public GoogleTypeDateTime withYear(Integer year) {
        this.year = year;
        return this;
    }
}