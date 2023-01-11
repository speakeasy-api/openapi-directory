package openapisdk.models.shared;


public enum FeatureResourceStateStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ENABLING("ENABLING"),
    ACTIVE("ACTIVE"),
    DISABLING("DISABLING"),
    UPDATING("UPDATING"),
    SERVICE_UPDATING("SERVICE_UPDATING");

    public final String value;

    private FeatureResourceStateStateEnum(String value) {
        this.value = value;
    }
}
