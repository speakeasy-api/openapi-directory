package openapisdk.models.shared;


public enum ConferenceEnumProcessingStateEnum {
    COMPLETE("complete"),
    IN_PROGRESS("in_progress"),
    TIMEOUT("timeout");

    public final String value;

    private ConferenceEnumProcessingStateEnum(String value) {
        this.value = value;
    }
}
