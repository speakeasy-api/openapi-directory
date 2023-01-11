package openapisdk.models.shared;


public enum JobRunStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    IN_PROGRESS("IN_PROGRESS"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED");

    public final String value;

    private JobRunStateEnum(String value) {
        this.value = value;
    }
}
