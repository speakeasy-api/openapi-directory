package openapisdk.models.shared;


public enum PhaseStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    PENDING("PENDING"),
    IN_PROGRESS("IN_PROGRESS"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    ABORTED("ABORTED");

    public final String value;

    private PhaseStateEnum(String value) {
        this.value = value;
    }
}
