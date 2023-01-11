package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RepeatUpdateModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public String frequency;
    public RepeatUpdateModel withFrequency(String frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interval")
    public Integer interval;
    public RepeatUpdateModel withInterval(Integer interval) {
        this.interval = interval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthDay")
    public Integer monthDay;
    public RepeatUpdateModel withMonthDay(Integer monthDay) {
        this.monthDay = monthDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthType")
    public String monthType;
    public RepeatUpdateModel withMonthType(String monthType) {
        this.monthType = monthType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weekdays")
    public String weekdays;
    public RepeatUpdateModel withWeekdays(String weekdays) {
        this.weekdays = weekdays;
        return this;
    }
}