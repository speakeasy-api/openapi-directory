package openapisdk.models.shared;


public enum ConferenceRecordingEnumStatusEnum {
    IN_PROGRESS("in-progress"),
    PAUSED("paused"),
    STOPPED("stopped"),
    PROCESSING("processing"),
    COMPLETED("completed"),
    ABSENT("absent");

    public final String value;

    private ConferenceRecordingEnumStatusEnum(String value) {
        this.value = value;
    }
}
