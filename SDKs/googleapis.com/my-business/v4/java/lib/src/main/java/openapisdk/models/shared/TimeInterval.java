package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeInterval
 * An interval of time, inclusive. It must contain all fields to be valid.
**/
public class TimeInterval {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public Date endDate;
    public TimeInterval withEndDate(Date endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public TimeOfDay endTime;
    public TimeInterval withEndTime(TimeOfDay endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public Date startDate;
    public TimeInterval withStartDate(Date startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public TimeOfDay startTime;
    public TimeInterval withStartTime(TimeOfDay startTime) {
        this.startTime = startTime;
        return this;
    }
}