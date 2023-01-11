package openapisdk.models.shared;


public enum FirstAndThirdPartyAudienceAudienceSourceEnum {
    AUDIENCE_SOURCE_UNSPECIFIED("AUDIENCE_SOURCE_UNSPECIFIED"),
    DISPLAY_VIDEO360("DISPLAY_VIDEO_360"),
    CAMPAIGN_MANAGER("CAMPAIGN_MANAGER"),
    AD_MANAGER("AD_MANAGER"),
    SEARCH_ADS360("SEARCH_ADS_360"),
    YOUTUBE("YOUTUBE"),
    ADS_DATA_HUB("ADS_DATA_HUB");

    public final String value;

    private FirstAndThirdPartyAudienceAudienceSourceEnum(String value) {
        this.value = value;
    }
}
