package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrdersCustomBatchRequestEntryUpdateShipment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier")
    public String carrier;
    public OrdersCustomBatchRequestEntryUpdateShipment withCarrier(String carrier) {
        this.carrier = carrier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryDate")
    public String deliveryDate;
    public OrdersCustomBatchRequestEntryUpdateShipment withDeliveryDate(String deliveryDate) {
        this.deliveryDate = deliveryDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipmentId")
    public String shipmentId;
    public OrdersCustomBatchRequestEntryUpdateShipment withShipmentId(String shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public OrdersCustomBatchRequestEntryUpdateShipment withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingId")
    public String trackingId;
    public OrdersCustomBatchRequestEntryUpdateShipment withTrackingId(String trackingId) {
        this.trackingId = trackingId;
        return this;
    }
}