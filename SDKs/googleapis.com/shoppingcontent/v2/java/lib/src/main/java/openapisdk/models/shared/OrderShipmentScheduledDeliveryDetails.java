package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderShipmentScheduledDeliveryDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrierPhoneNumber")
    public String carrierPhoneNumber;
    public OrderShipmentScheduledDeliveryDetails withCarrierPhoneNumber(String carrierPhoneNumber) {
        this.carrierPhoneNumber = carrierPhoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduledDate")
    public String scheduledDate;
    public OrderShipmentScheduledDeliveryDetails withScheduledDate(String scheduledDate) {
        this.scheduledDate = scheduledDate;
        return this;
    }
}