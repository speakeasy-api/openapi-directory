package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataSourceRefreshMonthlySchedule
 * A monthly schedule for data to refresh on specific days in the month in a given time interval.
**/
public class DataSourceRefreshMonthlySchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("daysOfMonth")
    public Integer[] daysOfMonth;
    public DataSourceRefreshMonthlySchedule withDaysOfMonth(Integer[] daysOfMonth) {
        this.daysOfMonth = daysOfMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public TimeOfDay startTime;
    public DataSourceRefreshMonthlySchedule withStartTime(TimeOfDay startTime) {
        this.startTime = startTime;
        return this;
    }
}