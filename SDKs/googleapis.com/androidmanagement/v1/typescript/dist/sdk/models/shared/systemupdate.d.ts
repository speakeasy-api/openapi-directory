import { SpeakeasyBase } from "../../../internal/utils";
import { FreezePeriod } from "./freezeperiod";
/**
 * The type of system update to configure.
 */
export declare enum SystemUpdateTypeEnum {
    SystemUpdateTypeUnspecified = "SYSTEM_UPDATE_TYPE_UNSPECIFIED",
    Automatic = "AUTOMATIC",
    Windowed = "WINDOWED",
    Postpone = "POSTPONE"
}
/**
 * Configuration for managing system updates
 */
export declare class SystemUpdate extends SpeakeasyBase {
    /**
     * If the type is WINDOWED, the end of the maintenance window, measured as the number of minutes after midnight in device's local time. This value must be between 0 and 1439, inclusive. If this value is less than start_minutes, then the maintenance window spans midnight. If the maintenance window specified is smaller than 30 minutes, the actual window is extended to 30 minutes beyond the start time.
     */
    endMinutes?: number;
    /**
     * An annually repeating time period in which over-the-air (OTA) system updates are postponed to freeze the OS version running on a device. To prevent freezing the device indefinitely, each freeze period must be separated by at least 60 days.
     */
    freezePeriods?: FreezePeriod[];
    /**
     * If the type is WINDOWED, the start of the maintenance window, measured as the number of minutes after midnight in the device's local time. This value must be between 0 and 1439, inclusive.
     */
    startMinutes?: number;
    /**
     * The type of system update to configure.
     */
    type?: SystemUpdateTypeEnum;
}
