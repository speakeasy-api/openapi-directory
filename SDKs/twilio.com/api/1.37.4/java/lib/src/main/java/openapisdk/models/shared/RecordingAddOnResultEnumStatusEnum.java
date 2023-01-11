package openapisdk.models.shared;


public enum RecordingAddOnResultEnumStatusEnum {
    CANCELED("canceled"),
    COMPLETED("completed"),
    DELETED("deleted"),
    FAILED("failed"),
    IN_PROGRESS("in-progress"),
    INIT("init"),
    PROCESSING("processing"),
    QUEUED("queued");

    public final String value;

    private RecordingAddOnResultEnumStatusEnum(String value) {
        this.value = value;
    }
}
