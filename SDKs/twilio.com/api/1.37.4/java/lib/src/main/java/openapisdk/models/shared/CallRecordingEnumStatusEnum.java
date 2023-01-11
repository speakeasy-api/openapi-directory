package openapisdk.models.shared;


public enum CallRecordingEnumStatusEnum {
    IN_PROGRESS("in-progress"),
    PAUSED("paused"),
    STOPPED("stopped"),
    PROCESSING("processing"),
    COMPLETED("completed"),
    ABSENT("absent");

    public final String value;

    private CallRecordingEnumStatusEnum(String value) {
        this.value = value;
    }
}
