package openapisdk.models.shared;


public enum ExecutionStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    QUEUED("QUEUED"),
    PREPARING("PREPARING"),
    RUNNING("RUNNING"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    CANCELLING("CANCELLING"),
    CANCELLED("CANCELLED"),
    EXPIRED("EXPIRED"),
    INITIALIZING("INITIALIZING");

    public final String value;

    private ExecutionStateEnum(String value) {
        this.value = value;
    }
}
