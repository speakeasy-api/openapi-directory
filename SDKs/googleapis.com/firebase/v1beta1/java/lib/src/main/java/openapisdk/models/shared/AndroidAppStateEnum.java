package openapisdk.models.shared;


public enum AndroidAppStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    DELETED("DELETED");

    public final String value;

    private AndroidAppStateEnum(String value) {
        this.value = value;
    }
}
