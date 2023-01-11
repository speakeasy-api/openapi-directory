package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObReadDataScheduledPayment3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScheduledPayment")
    public ObScheduledPayment3[] scheduledPayment;
    public ObReadDataScheduledPayment3 withScheduledPayment(ObScheduledPayment3[] scheduledPayment) {
        this.scheduledPayment = scheduledPayment;
        return this;
    }
}