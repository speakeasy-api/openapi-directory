package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportSchedule
 * The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not "TODAY".
**/
public class ReportSchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public ReportSchedule withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("every")
    public Integer every;
    public ReportSchedule withEvery(Integer every) {
        this.every = every;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationDate")
    public LocalDate expirationDate;
    public ReportSchedule withExpirationDate(LocalDate expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeats")
    public String repeats;
    public ReportSchedule withRepeats(String repeats) {
        this.repeats = repeats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeatsOnWeekDays")
    public ReportScheduleRepeatsOnWeekDaysEnum[] repeatsOnWeekDays;
    public ReportSchedule withRepeatsOnWeekDays(ReportScheduleRepeatsOnWeekDaysEnum[] repeatsOnWeekDays) {
        this.repeatsOnWeekDays = repeatsOnWeekDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runsOnDayOfMonth")
    public ReportScheduleRunsOnDayOfMonthEnum runsOnDayOfMonth;
    public ReportSchedule withRunsOnDayOfMonth(ReportScheduleRunsOnDayOfMonthEnum runsOnDayOfMonth) {
        this.runsOnDayOfMonth = runsOnDayOfMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public ReportSchedule withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}