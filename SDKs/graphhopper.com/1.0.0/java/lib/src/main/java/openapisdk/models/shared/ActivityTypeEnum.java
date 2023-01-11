package openapisdk.models.shared;


public enum ActivityTypeEnum {
    START("start"),
    END("end"),
    SERVICE("service"),
    PICKUP_SHIPMENT("pickupShipment"),
    DELIVER_SHIPMENT("deliverShipment"),
    PICKUP("pickup"),
    DELIVERY("delivery"),
    BREAK_("break");

    public final String value;

    private ActivityTypeEnum(String value) {
        this.value = value;
    }
}
