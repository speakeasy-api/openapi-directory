package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QuerySchedule
 * Information on how frequently and when to run a query.
**/
public class QuerySchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTimeMs")
    public String endTimeMs;
    public QuerySchedule withEndTimeMs(String endTimeMs) {
        this.endTimeMs = endTimeMs;
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
    @JsonProperty("nextRunMinuteOfDay")
    public Integer nextRunMinuteOfDay;
    public QuerySchedule withNextRunMinuteOfDay(Integer nextRunMinuteOfDay) {
        this.nextRunMinuteOfDay = nextRunMinuteOfDay;
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
    @JsonProperty("startTimeMs")
    public String startTimeMs;
    public QuerySchedule withStartTimeMs(String startTimeMs) {
        this.startTimeMs = startTimeMs;
        return this;
    }
}