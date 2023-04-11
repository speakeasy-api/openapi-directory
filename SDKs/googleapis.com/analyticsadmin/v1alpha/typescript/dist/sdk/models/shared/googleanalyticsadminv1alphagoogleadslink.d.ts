import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A link between a GA4 property and a Google Ads account.
 */
export declare class GoogleAnalyticsAdminV1alphaGoogleAdsLink extends SpeakeasyBase {
    /**
     * Enable personalized advertising features with this integration. Automatically publish my Google Analytics audience lists and Google Analytics remarketing events/parameters to the linked Google Ads account. If this field is not set on create/update, it will be defaulted to true.
     */
    adsPersonalizationEnabled?: boolean;
    /**
     * Output only. If true, this link is for a Google Ads manager account.
     */
    canManageClients?: boolean;
    /**
     * Output only. Time when this link was originally created.
     */
    createTime?: string;
    /**
     * Output only. Email address of the user that created the link. An empty string will be returned if the email address can't be retrieved.
     */
    creatorEmailAddress?: string;
    /**
     * Immutable. Google Ads customer ID.
     */
    customerId?: string;
    /**
     * Output only. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note: googleAdsLinkId is not the Google Ads customer ID.
     */
    name?: string;
    /**
     * Output only. Time when this link was last updated.
     */
    updateTime?: string;
}
/**
 * A link between a GA4 property and a Google Ads account.
 */
export declare class GoogleAnalyticsAdminV1alphaGoogleAdsLinkInput extends SpeakeasyBase {
    /**
     * Enable personalized advertising features with this integration. Automatically publish my Google Analytics audience lists and Google Analytics remarketing events/parameters to the linked Google Ads account. If this field is not set on create/update, it will be defaulted to true.
     */
    adsPersonalizationEnabled?: boolean;
    /**
     * Immutable. Google Ads customer ID.
     */
    customerId?: string;
}
