package openapisdk.models.shared;


public enum GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum {
    FEATURE_UNSPECIFIED("FEATURE_UNSPECIFIED"),
    LABEL_DETECTION("LABEL_DETECTION"),
    SHOT_CHANGE_DETECTION("SHOT_CHANGE_DETECTION"),
    EXPLICIT_CONTENT_DETECTION("EXPLICIT_CONTENT_DETECTION"),
    FACE_DETECTION("FACE_DETECTION"),
    SPEECH_TRANSCRIPTION("SPEECH_TRANSCRIPTION"),
    TEXT_DETECTION("TEXT_DETECTION"),
    OBJECT_TRACKING("OBJECT_TRACKING"),
    LOGO_RECOGNITION("LOGO_RECOGNITION"),
    PERSON_DETECTION("PERSON_DETECTION");

    public final String value;

    private GoogleCloudVideointelligenceV1AnnotateVideoRequestFeaturesEnum(String value) {
        this.value = value;
    }
}
