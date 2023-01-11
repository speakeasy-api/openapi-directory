package openapisdk.models.shared;


public enum ConferenceEnumConferenceStatusEnum {
    IN_PROGRESS("in_progress"),
    NOT_STARTED("not_started"),
    COMPLETED("completed"),
    SUMMARY_TIMEOUT("summary_timeout");

    public final String value;

    private ConferenceEnumConferenceStatusEnum(String value) {
        this.value = value;
    }
}
