package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrdersCustomBatchRequestEntryShipLineItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier")
    public String carrier;
    public OrdersCustomBatchRequestEntryShipLineItems withCarrier(String carrier) {
        this.carrier = carrier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItems")
    public OrderShipmentLineItemShipment[] lineItems;
    public OrdersCustomBatchRequestEntryShipLineItems withLineItems(OrderShipmentLineItemShipment[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipmentGroupId")
    public String shipmentGroupId;
    public OrdersCustomBatchRequestEntryShipLineItems withShipmentGroupId(String shipmentGroupId) {
        this.shipmentGroupId = shipmentGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipmentId")
    public String shipmentId;
    public OrdersCustomBatchRequestEntryShipLineItems withShipmentId(String shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipmentInfos")
    public OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[] shipmentInfos;
    public OrdersCustomBatchRequestEntryShipLineItems withShipmentInfos(OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[] shipmentInfos) {
        this.shipmentInfos = shipmentInfos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingId")
    public String trackingId;
    public OrdersCustomBatchRequestEntryShipLineItems withTrackingId(String trackingId) {
        this.trackingId = trackingId;
        return this;
    }
}