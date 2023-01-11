package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecurringScheduleInput
 * Sets the time for recurring patch deployments.
**/
public class RecurringScheduleInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public RecurringScheduleInput withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public RecurringScheduleFrequencyEnum frequency;
    public RecurringScheduleInput withFrequency(RecurringScheduleFrequencyEnum frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthly")
    public MonthlySchedule monthly;
    public RecurringScheduleInput withMonthly(MonthlySchedule monthly) {
        this.monthly = monthly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public RecurringScheduleInput withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeOfDay")
    public TimeOfDay timeOfDay;
    public RecurringScheduleInput withTimeOfDay(TimeOfDay timeOfDay) {
        this.timeOfDay = timeOfDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public TimeZone timeZone;
    public RecurringScheduleInput withTimeZone(TimeZone timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weekly")
    public WeeklySchedule weekly;
    public RecurringScheduleInput withWeekly(WeeklySchedule weekly) {
        this.weekly = weekly;
        return this;
    }
}