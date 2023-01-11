package openapisdk.models.shared;


public enum ExecutionStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    CANCELLED("CANCELLED");

    public final String value;

    private ExecutionStateEnum(String value) {
        this.value = value;
    }
}
