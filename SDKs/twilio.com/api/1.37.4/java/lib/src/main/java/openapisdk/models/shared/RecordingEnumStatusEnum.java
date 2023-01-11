package openapisdk.models.shared;


public enum RecordingEnumStatusEnum {
    IN_PROGRESS("in-progress"),
    PAUSED("paused"),
    STOPPED("stopped"),
    PROCESSING("processing"),
    COMPLETED("completed"),
    ABSENT("absent"),
    DELETED("deleted");

    public final String value;

    private RecordingEnumStatusEnum(String value) {
        this.value = value;
    }
}
