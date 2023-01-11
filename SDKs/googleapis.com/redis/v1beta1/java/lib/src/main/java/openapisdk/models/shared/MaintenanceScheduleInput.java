package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MaintenanceScheduleInput
 * Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated.
**/
public class MaintenanceScheduleInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canReschedule")
    public Boolean canReschedule;
    public MaintenanceScheduleInput withCanReschedule(Boolean canReschedule) {
        this.canReschedule = canReschedule;
        return this;
    }
}