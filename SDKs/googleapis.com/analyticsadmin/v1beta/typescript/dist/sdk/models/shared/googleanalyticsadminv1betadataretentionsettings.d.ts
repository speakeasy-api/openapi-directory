import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The length of time that event-level data is retained.
 */
export declare enum GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum {
    RetentionDurationUnspecified = "RETENTION_DURATION_UNSPECIFIED",
    TwoMonths = "TWO_MONTHS",
    FourteenMonths = "FOURTEEN_MONTHS",
    TwentySixMonths = "TWENTY_SIX_MONTHS",
    ThirtyEightMonths = "THIRTY_EIGHT_MONTHS",
    FiftyMonths = "FIFTY_MONTHS"
}
/**
 * Settings values for data retention. This is a singleton resource.
 */
export declare class GoogleAnalyticsAdminV1betaDataRetentionSettings extends SpeakeasyBase {
    /**
     * The length of time that event-level data is retained.
     */
    eventDataRetention?: GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum;
    /**
     * Output only. Resource name for this DataRetentionSetting resource. Format: properties/{property}/dataRetentionSettings
     */
    name?: string;
    /**
     * If true, reset the retention period for the user identifier with every event from that user.
     */
    resetUserDataOnNewActivity?: boolean;
}
