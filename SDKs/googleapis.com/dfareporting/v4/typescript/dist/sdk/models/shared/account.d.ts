import { SpeakeasyBase } from "../../../internal/utils";
import { ReportsConfiguration } from "./reportsconfiguration";
/**
 * Profile for this account. This is a read-only field that can be left blank.
 */
export declare enum AccountAccountProfileEnum {
    AccountProfileBasic = "ACCOUNT_PROFILE_BASIC",
    AccountProfileStandard = "ACCOUNT_PROFILE_STANDARD"
}
/**
 * Maximum number of active ads allowed for this account.
 */
export declare enum AccountActiveAdsLimitTierEnum {
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
 * Contains properties of a Campaign Manager account.
 */
export declare class Account extends SpeakeasyBase {
    /**
     * Account permissions assigned to this account.
     */
    accountPermissionIds?: string[];
    /**
     * Profile for this account. This is a read-only field that can be left blank.
     */
    accountProfile?: AccountAccountProfileEnum;
    /**
     * Whether this account is active.
     */
    active?: boolean;
    /**
     * Maximum number of active ads allowed for this account.
     */
    activeAdsLimitTier?: AccountActiveAdsLimitTierEnum;
    /**
     * Whether to serve creatives with Active View tags. If disabled, viewability data will not be available for any impressions.
     */
    activeViewOptOut?: boolean;
    /**
     * User role permissions available to the user roles of this account.
     */
    availablePermissionIds?: string[];
    /**
     * ID of the country associated with this account.
     */
    countryId?: string;
    /**
     * ID of currency associated with this account. This is a required field. Acceptable values are: - "1" for USD - "2" for GBP - "3" for ESP - "4" for SEK - "5" for CAD - "6" for JPY - "7" for DEM - "8" for AUD - "9" for FRF - "10" for ITL - "11" for DKK - "12" for NOK - "13" for FIM - "14" for ZAR - "15" for IEP - "16" for NLG - "17" for EUR - "18" for KRW - "19" for TWD - "20" for SGD - "21" for CNY - "22" for HKD - "23" for NZD - "24" for MYR - "25" for BRL - "26" for PTE - "28" for CLP - "29" for TRY - "30" for ARS - "31" for PEN - "32" for ILS - "33" for CHF - "34" for VEF - "35" for COP - "36" for GTQ - "37" for PLN - "39" for INR - "40" for THB - "41" for IDR - "42" for CZK - "43" for RON - "44" for HUF - "45" for RUB - "46" for AED - "47" for BGN - "48" for HRK - "49" for MXN - "50" for NGN - "51" for EGP
     */
    currencyId?: string;
    /**
     * Default placement dimensions for this account.
     */
    defaultCreativeSizeId?: string;
    /**
     * Description of this account.
     */
    description?: string;
    /**
     * ID of this account. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#account".
     */
    kind?: string;
    /**
     * Locale of this account. Acceptable values are: - "cs" (Czech) - "de" (German) - "en" (English) - "en-GB" (English United Kingdom) - "es" (Spanish) - "fr" (French) - "it" (Italian) - "ja" (Japanese) - "ko" (Korean) - "pl" (Polish) - "pt-BR" (Portuguese Brazil) - "ru" (Russian) - "sv" (Swedish) - "tr" (Turkish) - "zh-CN" (Chinese Simplified) - "zh-TW" (Chinese Traditional)
     */
    locale?: string;
    /**
     * Maximum image size allowed for this account, in kilobytes. Value must be greater than or equal to 1.
     */
    maximumImageSize?: string;
    /**
     * Name of this account. This is a required field, and must be less than 128 characters long and be globally unique.
     */
    name?: string;
    /**
     * Whether campaigns created in this account will be enabled for Nielsen OCR reach ratings by default.
     */
    nielsenOcrEnabled?: boolean;
    /**
     * Reporting Configuration
     */
    reportsConfiguration?: ReportsConfiguration;
    /**
     * Share Path to Conversion reports with Twitter.
     */
    shareReportsWithTwitter?: boolean;
    /**
     * File size limit in kilobytes of Rich Media teaser creatives. Acceptable values are 1 to 10240, inclusive.
     */
    teaserSizeLimit?: string;
}
