package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PaySchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaySchedule")
    public PaySchedulePaySchedule paySchedule;
    public PaySchedule withPaySchedule(PaySchedulePaySchedule paySchedule) {
        this.paySchedule = paySchedule;
        return this;
    }
}