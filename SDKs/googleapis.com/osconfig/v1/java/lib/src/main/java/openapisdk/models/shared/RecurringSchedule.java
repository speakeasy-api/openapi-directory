package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecurringSchedule
 * Sets the time for recurring patch deployments.
**/
public class RecurringSchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public RecurringSchedule withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public RecurringScheduleFrequencyEnum frequency;
    public RecurringSchedule withFrequency(RecurringScheduleFrequencyEnum frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastExecuteTime")
    public String lastExecuteTime;
    public RecurringSchedule withLastExecuteTime(String lastExecuteTime) {
        this.lastExecuteTime = lastExecuteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthly")
    public MonthlySchedule monthly;
    public RecurringSchedule withMonthly(MonthlySchedule monthly) {
        this.monthly = monthly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextExecuteTime")
    public String nextExecuteTime;
    public RecurringSchedule withNextExecuteTime(String nextExecuteTime) {
        this.nextExecuteTime = nextExecuteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public RecurringSchedule withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeOfDay")
    public TimeOfDay timeOfDay;
    public RecurringSchedule withTimeOfDay(TimeOfDay timeOfDay) {
        this.timeOfDay = timeOfDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public TimeZone timeZone;
    public RecurringSchedule withTimeZone(TimeZone timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weekly")
    public WeeklySchedule weekly;
    public RecurringSchedule withWeekly(WeeklySchedule weekly) {
        this.weekly = weekly;
        return this;
    }
}