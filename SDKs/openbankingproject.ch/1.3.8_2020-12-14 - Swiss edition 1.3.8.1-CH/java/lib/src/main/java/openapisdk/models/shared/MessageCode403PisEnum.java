package openapisdk.models.shared;


public enum MessageCode403PisEnum {
    CONSENT_UNKNOWN("CONSENT_UNKNOWN"),
    SERVICE_BLOCKED("SERVICE_BLOCKED"),
    RESOURCE_UNKNOWN("RESOURCE_UNKNOWN"),
    RESOURCE_EXPIRED("RESOURCE_EXPIRED"),
    PRODUCT_INVALID("PRODUCT_INVALID");

    public final String value;

    private MessageCode403PisEnum(String value) {
        this.value = value;
    }
}
