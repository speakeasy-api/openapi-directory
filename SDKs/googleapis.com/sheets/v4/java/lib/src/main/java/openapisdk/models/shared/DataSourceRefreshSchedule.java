package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataSourceRefreshSchedule
 * Schedule for refreshing the data source. Data sources in the spreadsheet are refreshed within a time interval. You can specify the start time by clicking the Scheduled Refresh button in the Sheets editor, but the interval is fixed at 4 hours. For example, if you specify a start time of 8am , the refresh will take place between 8am and 12pm every day.
**/
public class DataSourceRefreshSchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dailySchedule")
    public DataSourceRefreshDailySchedule dailySchedule;
    public DataSourceRefreshSchedule withDailySchedule(DataSourceRefreshDailySchedule dailySchedule) {
        this.dailySchedule = dailySchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public DataSourceRefreshSchedule withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthlySchedule")
    public DataSourceRefreshMonthlySchedule monthlySchedule;
    public DataSourceRefreshSchedule withMonthlySchedule(DataSourceRefreshMonthlySchedule monthlySchedule) {
        this.monthlySchedule = monthlySchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextRun")
    public Interval nextRun;
    public DataSourceRefreshSchedule withNextRun(Interval nextRun) {
        this.nextRun = nextRun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refreshScope")
    public DataSourceRefreshScheduleRefreshScopeEnum refreshScope;
    public DataSourceRefreshSchedule withRefreshScope(DataSourceRefreshScheduleRefreshScopeEnum refreshScope) {
        this.refreshScope = refreshScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weeklySchedule")
    public DataSourceRefreshWeeklySchedule weeklySchedule;
    public DataSourceRefreshSchedule withWeeklySchedule(DataSourceRefreshWeeklySchedule weeklySchedule) {
        this.weeklySchedule = weeklySchedule;
        return this;
    }
}