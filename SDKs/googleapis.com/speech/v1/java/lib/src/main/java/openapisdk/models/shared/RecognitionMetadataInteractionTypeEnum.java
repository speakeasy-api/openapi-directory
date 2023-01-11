package openapisdk.models.shared;


public enum RecognitionMetadataInteractionTypeEnum {
    INTERACTION_TYPE_UNSPECIFIED("INTERACTION_TYPE_UNSPECIFIED"),
    DISCUSSION("DISCUSSION"),
    PRESENTATION("PRESENTATION"),
    PHONE_CALL("PHONE_CALL"),
    VOICEMAIL("VOICEMAIL"),
    PROFESSIONALLY_PRODUCED("PROFESSIONALLY_PRODUCED"),
    VOICE_SEARCH("VOICE_SEARCH"),
    VOICE_COMMAND("VOICE_COMMAND"),
    DICTATION("DICTATION");

    public final String value;

    private RecognitionMetadataInteractionTypeEnum(String value) {
        this.value = value;
    }
}
