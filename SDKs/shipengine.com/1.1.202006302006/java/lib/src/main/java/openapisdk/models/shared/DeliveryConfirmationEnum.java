package openapisdk.models.shared;


public enum DeliveryConfirmationEnum {
    NONE("none"),
    DELIVERY("delivery"),
    SIGNATURE("signature"),
    ADULT_SIGNATURE("adult_signature"),
    DIRECT_SIGNATURE("direct_signature"),
    DELIVERY_MAILED("delivery_mailed");

    public final String value;

    private DeliveryConfirmationEnum(String value) {
        this.value = value;
    }
}
