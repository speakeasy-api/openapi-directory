package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DateRange
 * A contiguous set of days: startDate, startDate + 1 day, ..., endDate. The start and end dates are specified in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) date format `YYYY-MM-DD`.
**/
public class DateRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public DateRange withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public DateRange withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}