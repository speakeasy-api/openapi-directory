package openapisdk.models.shared;


public enum ExecutionCallLogLevelEnum {
    CALL_LOG_LEVEL_UNSPECIFIED("CALL_LOG_LEVEL_UNSPECIFIED"),
    LOG_ALL_CALLS("LOG_ALL_CALLS"),
    LOG_ERRORS_ONLY("LOG_ERRORS_ONLY");

    public final String value;

    private ExecutionCallLogLevelEnum(String value) {
        this.value = value;
    }
}
