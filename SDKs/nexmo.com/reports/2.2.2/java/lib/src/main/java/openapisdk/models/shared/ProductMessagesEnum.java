package openapisdk.models.shared;


public enum ProductMessagesEnum {
    SMS("SMS"),
    VOICE_CALL("VOICE-CALL"),
    IN_APP_VOICE("IN-APP-VOICE"),
    VERIFY_API("VERIFY-API"),
    NUMBER_INSIGHT("NUMBER-INSIGHT"),
    MESSAGES("MESSAGES"),
    CONVERSATIONS("CONVERSATIONS"),
    ASR("ASR");

    public final String value;

    private ProductMessagesEnum(String value) {
        this.value = value;
    }
}
