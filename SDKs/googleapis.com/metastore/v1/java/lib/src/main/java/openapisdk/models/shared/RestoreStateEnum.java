package openapisdk.models.shared;


public enum RestoreStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    RUNNING("RUNNING"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    CANCELLED("CANCELLED");

    public final String value;

    private RestoreStateEnum(String value) {
        this.value = value;
    }
}
