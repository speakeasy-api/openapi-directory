package openapisdk.models.shared;


public enum EventRecordFailureFailureCauseEnum {
    EVENT_UPDATE_FAILURE_CAUSE_UNSPECIFIED("EVENT_UPDATE_FAILURE_CAUSE_UNSPECIFIED"),
    NOT_FOUND("NOT_FOUND"),
    INVALID_UPDATE_VALUE("INVALID_UPDATE_VALUE");

    public final String value;

    private EventRecordFailureFailureCauseEnum(String value) {
        this.value = value;
    }
}
