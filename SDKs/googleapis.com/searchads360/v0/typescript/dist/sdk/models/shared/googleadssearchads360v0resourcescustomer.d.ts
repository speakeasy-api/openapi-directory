import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAdsSearchads360V0ResourcesConversionTrackingSetting } from "./googleadssearchads360v0resourcesconversiontrackingsetting";
import { GoogleAdsSearchads360V0ResourcesDoubleClickCampaignManagerSetting } from "./googleadssearchads360v0resourcesdoubleclickcampaignmanagersetting";
/**
 * Output only. Account status, for example, Enabled, Paused, Removed, etc.
 */
export declare enum GoogleAdsSearchads360V0ResourcesCustomerAccountStatusEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Enabled = "ENABLED",
    Paused = "PAUSED",
    Suspended = "SUSPENDED",
    Removed = "REMOVED",
    Draft = "DRAFT"
}
/**
 * Output only. Engine account type, for example, Google Ads, Microsoft Advertising, Yahoo Japan, Baidu, Facebook, Engine Track, etc.
 */
export declare enum GoogleAdsSearchads360V0ResourcesCustomerAccountTypeEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Baidu = "BAIDU",
    EngineTrack = "ENGINE_TRACK",
    Facebook = "FACEBOOK",
    FacebookGateway = "FACEBOOK_GATEWAY",
    GoogleAds = "GOOGLE_ADS",
    Microsoft = "MICROSOFT",
    SearchAds360 = "SEARCH_ADS_360",
    YahooJapan = "YAHOO_JAPAN"
}
/**
 * Output only. The status of the customer.
 */
export declare enum GoogleAdsSearchads360V0ResourcesCustomerStatusEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Enabled = "ENABLED",
    Canceled = "CANCELED",
    Suspended = "SUSPENDED",
    Closed = "CLOSED"
}
/**
 * A customer.
 */
export declare class GoogleAdsSearchads360V0ResourcesCustomer extends SpeakeasyBase {
    /**
     * Output only. Account status, for example, Enabled, Paused, Removed, etc.
     */
    accountStatus?: GoogleAdsSearchads360V0ResourcesCustomerAccountStatusEnum;
    /**
     * Output only. Engine account type, for example, Google Ads, Microsoft Advertising, Yahoo Japan, Baidu, Facebook, Engine Track, etc.
     */
    accountType?: GoogleAdsSearchads360V0ResourcesCustomerAccountTypeEnum;
    /**
     * Whether auto-tagging is enabled for the customer.
     */
    autoTaggingEnabled?: boolean;
    /**
     * A collection of customer-wide settings related to Search Ads 360 Conversion Tracking.
     */
    conversionTrackingSetting?: GoogleAdsSearchads360V0ResourcesConversionTrackingSetting;
    /**
     * Immutable. The currency in which the account operates. A subset of the currency codes from the ISO 4217 standard is supported.
     */
    currencyCode?: string;
    /**
     * Optional, non-unique descriptive name of the customer.
     */
    descriptiveName?: string;
    /**
     * DoubleClick Campaign Manager (DCM) setting for a manager customer.
     */
    doubleClickCampaignManagerSetting?: GoogleAdsSearchads360V0ResourcesDoubleClickCampaignManagerSetting;
    /**
     * Output only. ID of the account in the external engine account.
     */
    engineId?: string;
    /**
     * The URL template for appending params to the final URL
     */
    finalUrlSuffix?: string;
    /**
     * Output only. The ID of the customer.
     */
    id?: string;
    /**
     * Output only. The datetime when this customer was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format.
     */
    lastModifiedTime?: string;
    /**
     * Output only. Whether the customer is a manager.
     */
    manager?: boolean;
    /**
     * Immutable. The resource name of the customer. Customer resource names have the form: `customers/{customer_id}`
     */
    resourceName?: string;
    /**
     * Output only. The status of the customer.
     */
    status?: GoogleAdsSearchads360V0ResourcesCustomerStatusEnum;
    /**
     * Immutable. The local timezone ID of the customer.
     */
    timeZone?: string;
    /**
     * The URL template for constructing a tracking URL out of parameters.
     */
    trackingUrlTemplate?: string;
}
