import { SpeakeasyBase } from "../../../internal/utils";
/**
 * To collect communications or amusement taxes in the United States, choose the appropriate tax category. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498#streaming_tax).
 */
export declare enum RegionalTaxRateInfoStreamingTaxTypeEnum {
    StreamingTaxTypeUnspecified = "STREAMING_TAX_TYPE_UNSPECIFIED",
    StreamingTaxTypeTelcoVideoRental = "STREAMING_TAX_TYPE_TELCO_VIDEO_RENTAL",
    StreamingTaxTypeTelcoVideoSales = "STREAMING_TAX_TYPE_TELCO_VIDEO_SALES",
    StreamingTaxTypeTelcoVideoMultiChannel = "STREAMING_TAX_TYPE_TELCO_VIDEO_MULTI_CHANNEL",
    StreamingTaxTypeTelcoAudioRental = "STREAMING_TAX_TYPE_TELCO_AUDIO_RENTAL",
    StreamingTaxTypeTelcoAudioSales = "STREAMING_TAX_TYPE_TELCO_AUDIO_SALES",
    StreamingTaxTypeTelcoAudioMultiChannel = "STREAMING_TAX_TYPE_TELCO_AUDIO_MULTI_CHANNEL"
}
/**
 * Tax tier to specify reduced tax rate. Developers who sell digital news, magazines, newspapers, books, or audiobooks in various regions may be eligible for reduced tax rates. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498).
 */
export declare enum RegionalTaxRateInfoTaxTierEnum {
    TaxTierUnspecified = "TAX_TIER_UNSPECIFIED",
    TaxTierBooks1 = "TAX_TIER_BOOKS_1",
    TaxTierNews1 = "TAX_TIER_NEWS_1",
    TaxTierNews2 = "TAX_TIER_NEWS_2",
    TaxTierMusicOrAudio1 = "TAX_TIER_MUSIC_OR_AUDIO_1",
    TaxTierLiveOrBroadcast1 = "TAX_TIER_LIVE_OR_BROADCAST_1"
}
/**
 * Specified details about taxation in a given geographical region.
 */
export declare class RegionalTaxRateInfo extends SpeakeasyBase {
    /**
     * You must tell us if your app contains streaming products to correctly charge US state and local sales tax. Field only supported in United States.
     */
    eligibleForStreamingServiceTaxRate?: boolean;
    /**
     * To collect communications or amusement taxes in the United States, choose the appropriate tax category. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498#streaming_tax).
     */
    streamingTaxType?: RegionalTaxRateInfoStreamingTaxTypeEnum;
    /**
     * Tax tier to specify reduced tax rate. Developers who sell digital news, magazines, newspapers, books, or audiobooks in various regions may be eligible for reduced tax rates. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498).
     */
    taxTier?: RegionalTaxRateInfoTaxTierEnum;
}
