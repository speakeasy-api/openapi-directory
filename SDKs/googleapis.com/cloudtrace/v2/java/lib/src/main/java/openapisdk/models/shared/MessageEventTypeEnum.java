package openapisdk.models.shared;


public enum MessageEventTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    SENT("SENT"),
    RECEIVED("RECEIVED");

    public final String value;

    private MessageEventTypeEnum(String value) {
        this.value = value;
    }
}
