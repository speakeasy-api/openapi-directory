package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SqlInstancesRescheduleMaintenanceRequestBody
 * Reschedule options for maintenance windows.
**/
public class SqlInstancesRescheduleMaintenanceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reschedule")
    public Reschedule reschedule;
    public SqlInstancesRescheduleMaintenanceRequestBody withReschedule(Reschedule reschedule) {
        this.reschedule = reschedule;
        return this;
    }
}