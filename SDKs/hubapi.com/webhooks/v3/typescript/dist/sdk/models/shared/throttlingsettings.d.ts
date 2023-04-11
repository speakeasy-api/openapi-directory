import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Time scale for this setting. Can be either `SECONDLY` (per second) or `ROLLING_MINUTE` (per minute).
 */
export declare enum ThrottlingSettingsPeriodEnum {
    Secondly = "SECONDLY",
    RollingMinute = "ROLLING_MINUTE"
}
/**
 * Configuration details for webhook throttling.
 */
export declare class ThrottlingSettings extends SpeakeasyBase {
    /**
     * The maximum number of HTTP requests HubSpot will attempt to make to your app in a given time frame determined by `period`.
     */
    maxConcurrentRequests: number;
    /**
     * Time scale for this setting. Can be either `SECONDLY` (per second) or `ROLLING_MINUTE` (per minute).
     */
    period: ThrottlingSettingsPeriodEnum;
}
