package openapisdk.models.shared;


public enum RecordingEnumStatusEnum {
    PROCESSING("processing"),
    COMPLETED("completed"),
    DELETED("deleted"),
    FAILED("failed");

    public final String value;

    private RecordingEnumStatusEnum(String value) {
        this.value = value;
    }
}
