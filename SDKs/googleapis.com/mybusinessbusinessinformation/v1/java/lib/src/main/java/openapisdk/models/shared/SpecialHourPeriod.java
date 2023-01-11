package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SpecialHourPeriod
 * Represents a single time period when a location's operational hours differ from its normal business hours. A special hour period must represent a range of less than 24 hours. The `open_time` and `start_date` must predate the `close_time` and `end_date`. The `close_time` and `end_date` can extend to 11:59 a.m. on the day after the specified `start_date`. For example, the following inputs are valid: start_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=11:59 The following inputs are not valid: start_date=2015-11-23, open_time=13:00, close_time=11:59 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=12:00 start_date=2015-11-23, end_date=2015-11-25, open_time=08:00, close_time=18:00
**/
public class SpecialHourPeriod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closeTime")
    public TimeOfDay closeTime;
    public SpecialHourPeriod withCloseTime(TimeOfDay closeTime) {
        this.closeTime = closeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closed")
    public Boolean closed;
    public SpecialHourPeriod withClosed(Boolean closed) {
        this.closed = closed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public Date endDate;
    public SpecialHourPeriod withEndDate(Date endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openTime")
    public TimeOfDay openTime;
    public SpecialHourPeriod withOpenTime(TimeOfDay openTime) {
        this.openTime = openTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public Date startDate;
    public SpecialHourPeriod withStartDate(Date startDate) {
        this.startDate = startDate;
        return this;
    }
}