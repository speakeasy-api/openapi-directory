package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataSourceRefreshWeeklySchedule
 * A weekly schedule for data to refresh on specific days in a given time interval.
**/
public class DataSourceRefreshWeeklySchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("daysOfWeek")
    public DataSourceRefreshWeeklyScheduleDaysOfWeekEnum[] daysOfWeek;
    public DataSourceRefreshWeeklySchedule withDaysOfWeek(DataSourceRefreshWeeklyScheduleDaysOfWeekEnum[] daysOfWeek) {
        this.daysOfWeek = daysOfWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public TimeOfDay startTime;
    public DataSourceRefreshWeeklySchedule withStartTime(TimeOfDay startTime) {
        this.startTime = startTime;
        return this;
    }
}