package openapisdk.models.shared;


public enum ParticipantEnumStatusEnum {
    QUEUED("queued"),
    CONNECTING("connecting"),
    RINGING("ringing"),
    CONNECTED("connected"),
    COMPLETE("complete"),
    FAILED("failed");

    public final String value;

    private ParticipantEnumStatusEnum(String value) {
        this.value = value;
    }
}
