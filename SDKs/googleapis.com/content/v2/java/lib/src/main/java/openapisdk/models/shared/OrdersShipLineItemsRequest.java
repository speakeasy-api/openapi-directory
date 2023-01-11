package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrdersShipLineItemsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier")
    public String carrier;
    public OrdersShipLineItemsRequest withCarrier(String carrier) {
        this.carrier = carrier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItems")
    public OrderShipmentLineItemShipment[] lineItems;
    public OrdersShipLineItemsRequest withLineItems(OrderShipmentLineItemShipment[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationId")
    public String operationId;
    public OrdersShipLineItemsRequest withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipmentGroupId")
    public String shipmentGroupId;
    public OrdersShipLineItemsRequest withShipmentGroupId(String shipmentGroupId) {
        this.shipmentGroupId = shipmentGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipmentId")
    public String shipmentId;
    public OrdersShipLineItemsRequest withShipmentId(String shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipmentInfos")
    public OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[] shipmentInfos;
    public OrdersShipLineItemsRequest withShipmentInfos(OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[] shipmentInfos) {
        this.shipmentInfos = shipmentInfos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingId")
    public String trackingId;
    public OrdersShipLineItemsRequest withTrackingId(String trackingId) {
        this.trackingId = trackingId;
        return this;
    }
}