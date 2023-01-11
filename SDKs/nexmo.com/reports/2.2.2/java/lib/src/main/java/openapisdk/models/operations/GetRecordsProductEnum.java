package openapisdk.models.operations;


public enum GetRecordsProductEnum {
    SMS("SMS"),
    VOICE_CALL("VOICE-CALL"),
    VOICE_FAILED("VOICE-FAILED"),
    IN_APP_VOICE("IN-APP-VOICE"),
    WEBSOCKET_CALL("WEBSOCKET-CALL"),
    VERIFY_API("VERIFY-API"),
    NUMBER_INSIGHT("NUMBER-INSIGHT"),
    MESSAGES("MESSAGES"),
    ASR("ASR"),
    CONVERSATIONS("CONVERSATIONS"),
    REPORTS_USAGE("REPORTS-USAGE");

    public final String value;

    private GetRecordsProductEnum(String value) {
        this.value = value;
    }
}
