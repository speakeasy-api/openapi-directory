package openapisdk.models.shared;


public enum DeliveryControlDeliveryRateTypeEnum {
    DELIVERY_RATE_TYPE_UNSPECIFIED("DELIVERY_RATE_TYPE_UNSPECIFIED"),
    EVENLY("EVENLY"),
    FRONT_LOADED("FRONT_LOADED"),
    AS_FAST_AS_POSSIBLE("AS_FAST_AS_POSSIBLE");

    public final String value;

    private DeliveryControlDeliveryRateTypeEnum(String value) {
        this.value = value;
    }
}
