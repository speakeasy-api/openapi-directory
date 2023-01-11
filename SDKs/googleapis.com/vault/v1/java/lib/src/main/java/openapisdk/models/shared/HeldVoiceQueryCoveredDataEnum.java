package openapisdk.models.shared;


public enum HeldVoiceQueryCoveredDataEnum {
    COVERED_DATA_UNSPECIFIED("COVERED_DATA_UNSPECIFIED"),
    TEXT_MESSAGES("TEXT_MESSAGES"),
    VOICEMAILS("VOICEMAILS"),
    CALL_LOGS("CALL_LOGS");

    public final String value;

    private HeldVoiceQueryCoveredDataEnum(String value) {
        this.value = value;
    }
}
