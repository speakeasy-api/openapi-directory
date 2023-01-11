package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Reschedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rescheduleType")
    public RescheduleRescheduleTypeEnum rescheduleType;
    public Reschedule withRescheduleType(RescheduleRescheduleTypeEnum rescheduleType) {
        this.rescheduleType = rescheduleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleTime")
    public String scheduleTime;
    public Reschedule withScheduleTime(String scheduleTime) {
        this.scheduleTime = scheduleTime;
        return this;
    }
}