package openapisdk.models.shared;


public enum FunctionStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    FAILED("FAILED"),
    DEPLOYING("DEPLOYING"),
    DELETING("DELETING"),
    UNKNOWN("UNKNOWN");

    public final String value;

    private FunctionStateEnum(String value) {
        this.value = value;
    }
}
