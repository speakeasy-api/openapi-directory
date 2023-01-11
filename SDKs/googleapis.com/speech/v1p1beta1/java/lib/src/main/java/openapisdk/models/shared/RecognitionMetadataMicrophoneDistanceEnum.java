package openapisdk.models.shared;


public enum RecognitionMetadataMicrophoneDistanceEnum {
    MICROPHONE_DISTANCE_UNSPECIFIED("MICROPHONE_DISTANCE_UNSPECIFIED"),
    NEARFIELD("NEARFIELD"),
    MIDFIELD("MIDFIELD"),
    FARFIELD("FARFIELD");

    public final String value;

    private RecognitionMetadataMicrophoneDistanceEnum(String value) {
        this.value = value;
    }
}
