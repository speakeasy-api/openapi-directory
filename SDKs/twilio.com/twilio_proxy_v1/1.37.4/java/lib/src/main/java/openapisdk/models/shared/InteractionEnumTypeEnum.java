package openapisdk.models.shared;


public enum InteractionEnumTypeEnum {
    MESSAGE("message"),
    VOICE("voice"),
    UNKNOWN("unknown");

    public final String value;

    private InteractionEnumTypeEnum(String value) {
        this.value = value;
    }
}
