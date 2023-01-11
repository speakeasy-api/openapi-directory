package openapisdk.models.shared;


public enum AdTypeEnum {
    AD_SERVING_STANDARD_AD("AD_SERVING_STANDARD_AD"),
    AD_SERVING_DEFAULT_AD("AD_SERVING_DEFAULT_AD"),
    AD_SERVING_CLICK_TRACKER("AD_SERVING_CLICK_TRACKER"),
    AD_SERVING_TRACKING("AD_SERVING_TRACKING"),
    AD_SERVING_BRAND_SAFE_AD("AD_SERVING_BRAND_SAFE_AD");

    public final String value;

    private AdTypeEnum(String value) {
        this.value = value;
    }
}
