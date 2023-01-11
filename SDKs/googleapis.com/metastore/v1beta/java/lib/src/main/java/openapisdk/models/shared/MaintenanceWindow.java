package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MaintenanceWindow
 * Maintenance window. This specifies when Dataproc Metastore may perform system maintenance operation to the service.
**/
public class MaintenanceWindow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayOfWeek")
    public MaintenanceWindowDayOfWeekEnum dayOfWeek;
    public MaintenanceWindow withDayOfWeek(MaintenanceWindowDayOfWeekEnum dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hourOfDay")
    public Integer hourOfDay;
    public MaintenanceWindow withHourOfDay(Integer hourOfDay) {
        this.hourOfDay = hourOfDay;
        return this;
    }
}