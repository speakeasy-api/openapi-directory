package openapisdk.models.shared;


public enum PlacementCompatibilityEnum {
    DISPLAY("DISPLAY"),
    DISPLAY_INTERSTITIAL("DISPLAY_INTERSTITIAL"),
    APP("APP"),
    APP_INTERSTITIAL("APP_INTERSTITIAL"),
    IN_STREAM_VIDEO("IN_STREAM_VIDEO"),
    IN_STREAM_AUDIO("IN_STREAM_AUDIO");

    public final String value;

    private PlacementCompatibilityEnum(String value) {
        this.value = value;
    }
}
