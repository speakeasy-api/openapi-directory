import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters for Google Play Campaign Measurements. [Learn more](https://developers.google.com/analytics/devguides/collection/android/v4/campaigns#campaign-params)
 */
export declare class GooglePlayAnalytics extends SpeakeasyBase {
    /**
     * Deprecated; FDL SDK does not process nor log it.
     */
    gclid?: string;
    /**
     * Campaign name; used for keyword analysis to identify a specific product promotion or strategic campaign.
     */
    utmCampaign?: string;
    /**
     * Campaign content; used for A/B testing and content-targeted ads to differentiate ads or links that point to the same URL.
     */
    utmContent?: string;
    /**
     * Campaign medium; used to identify a medium such as email or cost-per-click.
     */
    utmMedium?: string;
    /**
     * Campaign source; used to identify a search engine, newsletter, or other source.
     */
    utmSource?: string;
    /**
     * Campaign term; used with paid search to supply the keywords for ads.
     */
    utmTerm?: string;
}
