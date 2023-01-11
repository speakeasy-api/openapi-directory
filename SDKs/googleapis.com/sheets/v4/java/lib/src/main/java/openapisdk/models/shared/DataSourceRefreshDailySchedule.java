package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataSourceRefreshDailySchedule
 * A schedule for data to refresh every day in a given time interval.
**/
public class DataSourceRefreshDailySchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public TimeOfDay startTime;
    public DataSourceRefreshDailySchedule withStartTime(TimeOfDay startTime) {
        this.startTime = startTime;
        return this;
    }
}