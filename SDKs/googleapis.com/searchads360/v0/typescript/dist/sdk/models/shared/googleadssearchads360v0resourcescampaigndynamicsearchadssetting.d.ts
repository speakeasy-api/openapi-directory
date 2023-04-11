import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The setting for controlling Dynamic Search Ads (DSA).
 */
export declare class GoogleAdsSearchads360V0ResourcesCampaignDynamicSearchAdsSetting extends SpeakeasyBase {
    /**
     * Required. The Internet domain name that this setting represents, for example, "google.com" or "www.google.com".
     */
    domainName?: string;
    /**
     * Required. The language code specifying the language of the domain, for example, "en".
     */
    languageCode?: string;
    /**
     * Whether the campaign uses advertiser supplied URLs exclusively.
     */
    useSuppliedUrlsOnly?: boolean;
}
