package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderShipment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier")
    public String carrier;
    public OrderShipment withCarrier(String carrier) {
        this.carrier = carrier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationDate")
    public String creationDate;
    public OrderShipment withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryDate")
    public String deliveryDate;
    public OrderShipment withDeliveryDate(String deliveryDate) {
        this.deliveryDate = deliveryDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OrderShipment withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItems")
    public OrderShipmentLineItemShipment[] lineItems;
    public OrderShipment withLineItems(OrderShipmentLineItemShipment[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduledDeliveryDetails")
    public OrderShipmentScheduledDeliveryDetails scheduledDeliveryDetails;
    public OrderShipment withScheduledDeliveryDetails(OrderShipmentScheduledDeliveryDetails scheduledDeliveryDetails) {
        this.scheduledDeliveryDetails = scheduledDeliveryDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public OrderShipment withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingId")
    public String trackingId;
    public OrderShipment withTrackingId(String trackingId) {
        this.trackingId = trackingId;
        return this;
    }
}