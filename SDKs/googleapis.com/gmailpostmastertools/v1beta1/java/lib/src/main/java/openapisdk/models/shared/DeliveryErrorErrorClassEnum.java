package openapisdk.models.shared;


public enum DeliveryErrorErrorClassEnum {
    DELIVERY_ERROR_CLASS_UNSPECIFIED("DELIVERY_ERROR_CLASS_UNSPECIFIED"),
    PERMANENT_ERROR("PERMANENT_ERROR"),
    TEMPORARY_ERROR("TEMPORARY_ERROR");

    public final String value;

    private DeliveryErrorErrorClassEnum(String value) {
        this.value = value;
    }
}
