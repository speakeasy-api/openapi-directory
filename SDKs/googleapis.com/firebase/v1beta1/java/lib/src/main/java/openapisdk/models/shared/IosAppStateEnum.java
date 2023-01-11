package openapisdk.models.shared;


public enum IosAppStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    DELETED("DELETED");

    public final String value;

    private IosAppStateEnum(String value) {
        this.value = value;
    }
}
