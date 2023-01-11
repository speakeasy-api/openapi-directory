package openapisdk.models.shared;


public enum UpsPickupTypeEnum {
    DAILY_PICKUP("daily_pickup"),
    OCCASIONAL_PICKUP("occasional_pickup"),
    CUSTOMER_COUNTER("customer_counter");

    public final String value;

    private UpsPickupTypeEnum(String value) {
        this.value = value;
    }
}
