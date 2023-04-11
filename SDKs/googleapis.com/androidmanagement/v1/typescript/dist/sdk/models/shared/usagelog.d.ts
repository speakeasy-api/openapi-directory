import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UsageLogEnabledLogTypesEnum {
    LogTypeUnspecified = "LOG_TYPE_UNSPECIFIED",
    SecurityLogs = "SECURITY_LOGS",
    NetworkActivityLogs = "NETWORK_ACTIVITY_LOGS"
}
export declare enum UsageLogUploadOnCellularAllowedEnum {
    LogTypeUnspecified = "LOG_TYPE_UNSPECIFIED",
    SecurityLogs = "SECURITY_LOGS",
    NetworkActivityLogs = "NETWORK_ACTIVITY_LOGS"
}
/**
 * Controls types of device activity logs collected from the device and reported via Pub/Sub notification (https://developers.google.com/android/management/notifications).
 */
export declare class UsageLog extends SpeakeasyBase {
    /**
     * Specifies which log types are enabled. Note that users will receive on-device messaging when usage logging is enabled.
     */
    enabledLogTypes?: UsageLogEnabledLogTypesEnum[];
    /**
     * Specifies which of the enabled log types can be uploaded over mobile data. By default logs are queued for upload when the device connects to WiFi.
     */
    uploadOnCellularAllowed?: UsageLogUploadOnCellularAllowedEnum[];
}
