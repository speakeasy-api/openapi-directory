package openapisdk.models.shared;


public enum CallEnumStatusEnum {
    QUEUED("queued"),
    RINGING("ringing"),
    IN_PROGRESS("in-progress"),
    COMPLETED("completed"),
    BUSY("busy"),
    FAILED("failed"),
    NO_ANSWER("no-answer"),
    CANCELED("canceled");

    public final String value;

    private CallEnumStatusEnum(String value) {
        this.value = value;
    }
}
