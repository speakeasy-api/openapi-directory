package openapisdk.models.shared;


public enum AppIntegrityAppRecognitionVerdictEnum {
    UNKNOWN("UNKNOWN"),
    PLAY_RECOGNIZED("PLAY_RECOGNIZED"),
    UNRECOGNIZED_VERSION("UNRECOGNIZED_VERSION"),
    UNEVALUATED("UNEVALUATED");

    public final String value;

    private AppIntegrityAppRecognitionVerdictEnum(String value) {
        this.value = value;
    }
}
