package openapisdk.models.shared;


public enum ConferenceParticipantEnumProcessingStateEnum {
    COMPLETE("complete"),
    IN_PROGRESS("in_progress"),
    TIMEOUT("timeout");

    public final String value;

    private ConferenceParticipantEnumProcessingStateEnum(String value) {
        this.value = value;
    }
}
