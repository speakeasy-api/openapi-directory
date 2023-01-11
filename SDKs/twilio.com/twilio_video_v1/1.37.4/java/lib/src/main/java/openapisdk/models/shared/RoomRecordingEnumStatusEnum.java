package openapisdk.models.shared;


public enum RoomRecordingEnumStatusEnum {
    PROCESSING("processing"),
    COMPLETED("completed"),
    DELETED("deleted"),
    FAILED("failed");

    public final String value;

    private RoomRecordingEnumStatusEnum(String value) {
        this.value = value;
    }
}
