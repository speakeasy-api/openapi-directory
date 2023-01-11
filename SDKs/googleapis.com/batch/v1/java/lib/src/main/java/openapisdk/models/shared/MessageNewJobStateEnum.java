package openapisdk.models.shared;


public enum MessageNewJobStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    QUEUED("QUEUED"),
    SCHEDULED("SCHEDULED"),
    RUNNING("RUNNING"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    DELETION_IN_PROGRESS("DELETION_IN_PROGRESS");

    public final String value;

    private MessageNewJobStateEnum(String value) {
        this.value = value;
    }
}
