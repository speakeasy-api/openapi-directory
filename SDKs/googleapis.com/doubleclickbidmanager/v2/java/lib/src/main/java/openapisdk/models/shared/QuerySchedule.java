package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QuerySchedule
 * Information on when and how frequently to run a query.
**/
public class QuerySchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public Date endDate;
    public QuerySchedule withEndDate(Date endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public QueryScheduleFrequencyEnum frequency;
    public QuerySchedule withFrequency(QueryScheduleFrequencyEnum frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextRunTimezoneCode")
    public String nextRunTimezoneCode;
    public QuerySchedule withNextRunTimezoneCode(String nextRunTimezoneCode) {
        this.nextRunTimezoneCode = nextRunTimezoneCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public Date startDate;
    public QuerySchedule withStartDate(Date startDate) {
        this.startDate = startDate;
        return this;
    }
}