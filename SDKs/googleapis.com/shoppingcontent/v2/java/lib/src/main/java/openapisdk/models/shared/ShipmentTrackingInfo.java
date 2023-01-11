package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ShipmentTrackingInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier")
    public String carrier;
    public ShipmentTrackingInfo withCarrier(String carrier) {
        this.carrier = carrier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingNumber")
    public String trackingNumber;
    public ShipmentTrackingInfo withTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
        return this;
    }
}