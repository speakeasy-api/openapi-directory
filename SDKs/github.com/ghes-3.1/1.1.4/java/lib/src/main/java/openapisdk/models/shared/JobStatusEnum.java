package openapisdk.models.shared;


public enum JobStatusEnum {
    QUEUED("queued"),
    IN_PROGRESS("in_progress"),
    COMPLETED("completed");

    public final String value;

    private JobStatusEnum(String value) {
        this.value = value;
    }
}
