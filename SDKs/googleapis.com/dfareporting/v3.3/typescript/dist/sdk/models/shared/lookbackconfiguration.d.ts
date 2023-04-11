import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Lookback configuration settings.
 */
export declare class LookbackConfiguration extends SpeakeasyBase {
    /**
     * Lookback window, in days, from the last time a given user clicked on one of your ads. If you enter 0, clicks will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive.
     */
    clickDuration?: number;
    /**
     * Lookback window, in days, from the last time a given user viewed one of your ads. If you enter 0, impressions will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive.
     */
    postImpressionActivitiesDuration?: number;
}
