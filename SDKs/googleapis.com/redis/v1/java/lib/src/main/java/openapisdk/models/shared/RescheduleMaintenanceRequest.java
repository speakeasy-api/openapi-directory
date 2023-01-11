package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RescheduleMaintenanceRequest
 * Request for RescheduleMaintenance.
**/
public class RescheduleMaintenanceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rescheduleType")
    public RescheduleMaintenanceRequestRescheduleTypeEnum rescheduleType;
    public RescheduleMaintenanceRequest withRescheduleType(RescheduleMaintenanceRequestRescheduleTypeEnum rescheduleType) {
        this.rescheduleType = rescheduleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleTime")
    public String scheduleTime;
    public RescheduleMaintenanceRequest withScheduleTime(String scheduleTime) {
        this.scheduleTime = scheduleTime;
        return this;
    }
}