package openapisdk.models.shared;


public enum DataExecutionStatusStateEnum {
    DATA_EXECUTION_STATE_UNSPECIFIED("DATA_EXECUTION_STATE_UNSPECIFIED"),
    NOT_STARTED("NOT_STARTED"),
    RUNNING("RUNNING"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED");

    public final String value;

    private DataExecutionStatusStateEnum(String value) {
        this.value = value;
    }
}
