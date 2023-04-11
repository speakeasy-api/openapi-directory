import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Maximum number of active ads allowed for the account.
 */
export declare enum AccountActiveAdSummaryActiveAdsLimitTierEnum {
    ActiveAdsTier40K = "ACTIVE_ADS_TIER_40K",
    ActiveAdsTier75K = "ACTIVE_ADS_TIER_75K",
    ActiveAdsTier100K = "ACTIVE_ADS_TIER_100K",
    ActiveAdsTier200K = "ACTIVE_ADS_TIER_200K",
    ActiveAdsTier300K = "ACTIVE_ADS_TIER_300K",
    ActiveAdsTier500K = "ACTIVE_ADS_TIER_500K",
    ActiveAdsTier750K = "ACTIVE_ADS_TIER_750K",
    ActiveAdsTier1M = "ACTIVE_ADS_TIER_1M"
}
/**
 * Gets a summary of active ads in an account.
 */
export declare class AccountActiveAdSummary extends SpeakeasyBase {
    /**
     * ID of the account.
     */
    accountId?: string;
    /**
     * Ads that have been activated for the account
     */
    activeAds?: string;
    /**
     * Maximum number of active ads allowed for the account.
     */
    activeAdsLimitTier?: AccountActiveAdSummaryActiveAdsLimitTierEnum;
    /**
     * Ads that can be activated for the account.
     */
    availableAds?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountActiveAdSummary".
     */
    kind?: string;
}
