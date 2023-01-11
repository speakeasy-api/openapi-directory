package openapisdk.models.shared;


public enum JobStatusEnum {
    IN_PROGRESS("in_progress"),
    TRANSCRIBED("transcribed"),
    FAILED("failed");

    public final String value;

    private JobStatusEnum(String value) {
        this.value = value;
    }
}
