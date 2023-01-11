package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReturnShipment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationDate")
    public String creationDate;
    public ReturnShipment withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryDate")
    public String deliveryDate;
    public ReturnShipment withDeliveryDate(String deliveryDate) {
        this.deliveryDate = deliveryDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnMethodType")
    public String returnMethodType;
    public ReturnShipment withReturnMethodType(String returnMethodType) {
        this.returnMethodType = returnMethodType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipmentId")
    public String shipmentId;
    public ReturnShipment withShipmentId(String shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipmentTrackingInfos")
    public ShipmentTrackingInfo[] shipmentTrackingInfos;
    public ReturnShipment withShipmentTrackingInfos(ShipmentTrackingInfo[] shipmentTrackingInfos) {
        this.shipmentTrackingInfos = shipmentTrackingInfos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingDate")
    public String shippingDate;
    public ReturnShipment withShippingDate(String shippingDate) {
        this.shippingDate = shippingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public ReturnShipment withState(String state) {
        this.state = state;
        return this;
    }
}