package openapisdk.models.shared;


public enum JobStatusStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    QUEUED("QUEUED"),
    SCHEDULED("SCHEDULED"),
    RUNNING("RUNNING"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    DELETION_IN_PROGRESS("DELETION_IN_PROGRESS");

    public final String value;

    private JobStatusStateEnum(String value) {
        this.value = value;
    }
}
