package openapisdk.models.shared;


public enum SessionEnumModeEnum {
    MESSAGE_ONLY("message-only"),
    VOICE_ONLY("voice-only"),
    VOICE_AND_MESSAGE("voice-and-message");

    public final String value;

    private SessionEnumModeEnum(String value) {
        this.value = value;
    }
}
