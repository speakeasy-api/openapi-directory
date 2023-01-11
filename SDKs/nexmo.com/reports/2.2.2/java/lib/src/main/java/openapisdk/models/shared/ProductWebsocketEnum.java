package openapisdk.models.shared;


public enum ProductWebsocketEnum {
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

    private ProductWebsocketEnum(String value) {
        this.value = value;
    }
}
