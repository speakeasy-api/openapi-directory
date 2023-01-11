package openapisdk.models.shared;


public enum JobStateEnum {
    PROCESSING_STATE_UNSPECIFIED("PROCESSING_STATE_UNSPECIFIED"),
    PENDING("PENDING"),
    RUNNING("RUNNING"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED");

    public final String value;

    private JobStateEnum(String value) {
        this.value = value;
    }
}
