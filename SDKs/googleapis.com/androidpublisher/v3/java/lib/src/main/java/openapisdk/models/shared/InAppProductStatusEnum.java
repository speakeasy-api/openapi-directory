package openapisdk.models.shared;


public enum InAppProductStatusEnum {
    STATUS_UNSPECIFIED("statusUnspecified"),
    ACTIVE("active"),
    INACTIVE("inactive");

    public final String value;

    private InAppProductStatusEnum(String value) {
        this.value = value;
    }
}
