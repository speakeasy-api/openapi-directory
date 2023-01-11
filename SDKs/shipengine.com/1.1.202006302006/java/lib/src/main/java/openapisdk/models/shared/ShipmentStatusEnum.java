package openapisdk.models.shared;


public enum ShipmentStatusEnum {
    PENDING("pending"),
    PROCESSING("processing"),
    LABEL_PURCHASED("label_purchased"),
    CANCELLED("cancelled");

    public final String value;

    private ShipmentStatusEnum(String value) {
        this.value = value;
    }
}
