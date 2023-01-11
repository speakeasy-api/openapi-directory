package openapisdk.models.operations;


public enum DfareportingAdsListCompatibilityEnum {
    DISPLAY("DISPLAY"),
    DISPLAY_INTERSTITIAL("DISPLAY_INTERSTITIAL"),
    APP("APP"),
    APP_INTERSTITIAL("APP_INTERSTITIAL"),
    IN_STREAM_VIDEO("IN_STREAM_VIDEO"),
    IN_STREAM_AUDIO("IN_STREAM_AUDIO");

    public final String value;

    private DfareportingAdsListCompatibilityEnum(String value) {
        this.value = value;
    }
}
