package openapisdk.models.shared;


public enum AdCompatibilityEnum {
    DISPLAY("DISPLAY"),
    DISPLAY_INTERSTITIAL("DISPLAY_INTERSTITIAL"),
    APP("APP"),
    APP_INTERSTITIAL("APP_INTERSTITIAL"),
    IN_STREAM_VIDEO("IN_STREAM_VIDEO"),
    IN_STREAM_AUDIO("IN_STREAM_AUDIO");

    public final String value;

    private AdCompatibilityEnum(String value) {
        this.value = value;
    }
}
