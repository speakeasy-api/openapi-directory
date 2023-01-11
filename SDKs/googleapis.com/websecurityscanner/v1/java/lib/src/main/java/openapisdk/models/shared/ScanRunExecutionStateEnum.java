package openapisdk.models.shared;


public enum ScanRunExecutionStateEnum {
    EXECUTION_STATE_UNSPECIFIED("EXECUTION_STATE_UNSPECIFIED"),
    QUEUED("QUEUED"),
    SCANNING("SCANNING"),
    FINISHED("FINISHED");

    public final String value;

    private ScanRunExecutionStateEnum(String value) {
        this.value = value;
    }
}
