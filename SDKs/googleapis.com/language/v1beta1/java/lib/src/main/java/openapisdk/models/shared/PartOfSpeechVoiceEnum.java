package openapisdk.models.shared;


public enum PartOfSpeechVoiceEnum {
    VOICE_UNKNOWN("VOICE_UNKNOWN"),
    ACTIVE("ACTIVE"),
    CAUSATIVE("CAUSATIVE"),
    PASSIVE("PASSIVE");

    public final String value;

    private PartOfSpeechVoiceEnum(String value) {
        this.value = value;
    }
}
