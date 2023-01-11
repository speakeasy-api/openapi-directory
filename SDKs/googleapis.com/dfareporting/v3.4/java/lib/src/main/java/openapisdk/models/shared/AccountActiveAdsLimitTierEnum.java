package openapisdk.models.shared;


public enum AccountActiveAdsLimitTierEnum {
    ACTIVE_ADS_TIER40_K("ACTIVE_ADS_TIER_40K"),
    ACTIVE_ADS_TIER75_K("ACTIVE_ADS_TIER_75K"),
    ACTIVE_ADS_TIER100_K("ACTIVE_ADS_TIER_100K"),
    ACTIVE_ADS_TIER200_K("ACTIVE_ADS_TIER_200K"),
    ACTIVE_ADS_TIER300_K("ACTIVE_ADS_TIER_300K"),
    ACTIVE_ADS_TIER500_K("ACTIVE_ADS_TIER_500K"),
    ACTIVE_ADS_TIER750_K("ACTIVE_ADS_TIER_750K"),
    ACTIVE_ADS_TIER1_M("ACTIVE_ADS_TIER_1M");

    public final String value;

    private AccountActiveAdsLimitTierEnum(String value) {
        this.value = value;
    }
}
