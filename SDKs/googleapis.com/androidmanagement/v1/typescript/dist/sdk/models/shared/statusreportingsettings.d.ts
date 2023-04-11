import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationReportingSettings } from "./applicationreportingsettings";
/**
 * Settings controlling the behavior of status reports.
 */
export declare class StatusReportingSettings extends SpeakeasyBase {
    /**
     * Settings controlling the behavior of application reports.
     */
    applicationReportingSettings?: ApplicationReportingSettings;
    /**
     * Whether app reports are enabled.
     */
    applicationReportsEnabled?: boolean;
    /**
     * Whether Common Criteria Mode reporting is enabled.
     */
    commonCriteriaModeEnabled?: boolean;
    /**
     * Whether device settings reporting is enabled.
     */
    deviceSettingsEnabled?: boolean;
    /**
     * Whether displays reporting is enabled. Report data is not available for personally owned devices with work profiles.
     */
    displayInfoEnabled?: boolean;
    /**
     * Whether hardware status reporting is enabled. Report data is not available for personally owned devices with work profiles.
     */
    hardwareStatusEnabled?: boolean;
    /**
     * Whether memory event reporting is enabled.
     */
    memoryInfoEnabled?: boolean;
    /**
     * Whether network info reporting is enabled.
     */
    networkInfoEnabled?: boolean;
    /**
     * Whether power management event reporting is enabled. Report data is not available for personally owned devices with work profiles.
     */
    powerManagementEventsEnabled?: boolean;
    /**
     * Whether software info reporting is enabled.
     */
    softwareInfoEnabled?: boolean;
    /**
     * Whether system properties reporting is enabled.
     */
    systemPropertiesEnabled?: boolean;
}
