package openapisdk.models.shared;


public enum WebAppStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    DELETED("DELETED");

    public final String value;

    private WebAppStateEnum(String value) {
        this.value = value;
    }
}
