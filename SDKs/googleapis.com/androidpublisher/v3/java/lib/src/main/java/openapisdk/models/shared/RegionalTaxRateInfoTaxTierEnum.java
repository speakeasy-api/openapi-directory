package openapisdk.models.shared;


public enum RegionalTaxRateInfoTaxTierEnum {
    TAX_TIER_UNSPECIFIED("TAX_TIER_UNSPECIFIED"),
    TAX_TIER_BOOKS1("TAX_TIER_BOOKS_1"),
    TAX_TIER_NEWS1("TAX_TIER_NEWS_1"),
    TAX_TIER_NEWS2("TAX_TIER_NEWS_2"),
    TAX_TIER_MUSIC_OR_AUDIO1("TAX_TIER_MUSIC_OR_AUDIO_1"),
    TAX_TIER_LIVE_OR_BROADCAST1("TAX_TIER_LIVE_OR_BROADCAST_1");

    public final String value;

    private RegionalTaxRateInfoTaxTierEnum(String value) {
        this.value = value;
    }
}
