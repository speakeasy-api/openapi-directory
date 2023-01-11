package openapisdk.models.shared;


public enum DeliveryControlCompanionDeliveryTypeEnum {
    COMPANION_DELIVERY_TYPE_UNSPECIFIED("COMPANION_DELIVERY_TYPE_UNSPECIFIED"),
    DELIVERY_OPTIONAL("DELIVERY_OPTIONAL"),
    DELIVERY_AT_LEAST_ONE("DELIVERY_AT_LEAST_ONE"),
    DELIVERY_ALL("DELIVERY_ALL");

    public final String value;

    private DeliveryControlCompanionDeliveryTypeEnum(String value) {
        this.value = value;
    }
}
