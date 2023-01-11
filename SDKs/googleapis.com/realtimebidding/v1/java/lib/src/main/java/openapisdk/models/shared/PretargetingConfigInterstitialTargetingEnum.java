package openapisdk.models.shared;


public enum PretargetingConfigInterstitialTargetingEnum {
    INTERSTITIAL_TARGETING_UNSPECIFIED("INTERSTITIAL_TARGETING_UNSPECIFIED"),
    ONLY_INTERSTITIAL_REQUESTS("ONLY_INTERSTITIAL_REQUESTS"),
    ONLY_NON_INTERSTITIAL_REQUESTS("ONLY_NON_INTERSTITIAL_REQUESTS");

    public final String value;

    private PretargetingConfigInterstitialTargetingEnum(String value) {
        this.value = value;
    }
}
