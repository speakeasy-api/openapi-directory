import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayAnalytics } from "./googleplayanalytics";
import { ITunesConnectAnalytics } from "./itunesconnectanalytics";
/**
 * Tracking parameters supported by Dynamic Link.
 */
export declare class AnalyticsInfo extends SpeakeasyBase {
    /**
     * Parameters for Google Play Campaign Measurements. [Learn more](https://developers.google.com/analytics/devguides/collection/android/v4/campaigns#campaign-params)
     */
    googlePlayAnalytics?: GooglePlayAnalytics;
    /**
     * Parameters for iTunes Connect App Analytics.
     */
    itunesConnectAnalytics?: ITunesConnectAnalytics;
}
