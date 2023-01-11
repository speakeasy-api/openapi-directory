package openapisdk.models.shared;


public enum JobStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    PENDING("PENDING"),
    DISABLED("DISABLED"),
    IN_PROGRESS("IN_PROGRESS"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    ABORTED("ABORTED");

    public final String value;

    private JobStateEnum(String value) {
        this.value = value;
    }
}
