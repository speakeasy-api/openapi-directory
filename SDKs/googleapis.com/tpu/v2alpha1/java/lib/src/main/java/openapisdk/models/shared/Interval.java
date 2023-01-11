package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Interval
 * Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.
**/
public class Interval {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public Interval withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public Interval withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}