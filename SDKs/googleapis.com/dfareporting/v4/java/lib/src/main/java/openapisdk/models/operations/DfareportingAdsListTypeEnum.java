package openapisdk.models.operations;


public enum DfareportingAdsListTypeEnum {
    AD_SERVING_STANDARD_AD("AD_SERVING_STANDARD_AD"),
    AD_SERVING_DEFAULT_AD("AD_SERVING_DEFAULT_AD"),
    AD_SERVING_CLICK_TRACKER("AD_SERVING_CLICK_TRACKER"),
    AD_SERVING_TRACKING("AD_SERVING_TRACKING"),
    AD_SERVING_BRAND_SAFE_AD("AD_SERVING_BRAND_SAFE_AD");

    public final String value;

    private DfareportingAdsListTypeEnum(String value) {
        this.value = value;
    }
}
