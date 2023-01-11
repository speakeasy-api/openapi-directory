package openapisdk.models.shared;


public enum OrderLineItemOrderLineItemStatusEnum {
    CANCELLED("Cancelled"),
    COMPLETED("Completed"),
    CONFIRMED("Confirmed"),
    PENDING("Pending"),
    PRODUCTION_COMPLETED("ProductionCompleted"),
    SHIPMENT_COMPLETED("ShipmentCompleted");

    public final String value;

    private OrderLineItemOrderLineItemStatusEnum(String value) {
        this.value = value;
    }
}
