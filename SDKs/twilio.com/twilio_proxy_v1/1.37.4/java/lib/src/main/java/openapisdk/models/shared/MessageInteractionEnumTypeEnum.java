package openapisdk.models.shared;


public enum MessageInteractionEnumTypeEnum {
    MESSAGE("message"),
    VOICE("voice"),
    UNKNOWN("unknown");

    public final String value;

    private MessageInteractionEnumTypeEnum(String value) {
        this.value = value;
    }
}
