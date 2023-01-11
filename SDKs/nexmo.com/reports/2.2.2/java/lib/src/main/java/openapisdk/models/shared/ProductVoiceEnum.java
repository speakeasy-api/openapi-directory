package openapisdk.models.shared;


public enum ProductVoiceEnum {
    SMS("SMS"),
    VOICE_CALL("VOICE-CALL"),
    IN_APP_VOICE("IN-APP-VOICE"),
    WEBSOCKET_CALL("WEBSOCKET-CALL"),
    VERIFY_API("VERIFY-API"),
    NUMBER_INSIGHT("NUMBER-INSIGHT"),
    MESSAGES("MESSAGES"),
    CONVERSATIONS("CONVERSATIONS"),
    ASR("ASR");

    public final String value;

    private ProductVoiceEnum(String value) {
        this.value = value;
    }
}
