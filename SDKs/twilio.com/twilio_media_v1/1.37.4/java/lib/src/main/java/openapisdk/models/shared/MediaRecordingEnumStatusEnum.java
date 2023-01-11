package openapisdk.models.shared;


public enum MediaRecordingEnumStatusEnum {
    PROCESSING("processing"),
    COMPLETED("completed"),
    DELETED("deleted"),
    FAILED("failed");

    public final String value;

    private MediaRecordingEnumStatusEnum(String value) {
        this.value = value;
    }
}
