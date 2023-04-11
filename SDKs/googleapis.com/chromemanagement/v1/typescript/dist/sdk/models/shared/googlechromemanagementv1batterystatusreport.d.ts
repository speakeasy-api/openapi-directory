import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1BatterySampleReport } from "./googlechromemanagementv1batterysamplereport";
/**
 * Output only. Battery health.
 */
export declare enum GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum {
    BatteryHealthUnspecified = "BATTERY_HEALTH_UNSPECIFIED",
    BatteryHealthNormal = "BATTERY_HEALTH_NORMAL",
    BatteryReplaceSoon = "BATTERY_REPLACE_SOON",
    BatteryReplaceNow = "BATTERY_REPLACE_NOW"
}
/**
 * Status data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
 */
export declare class GoogleChromeManagementV1BatteryStatusReport extends SpeakeasyBase {
    /**
     * Output only. Battery health.
     */
    batteryHealth?: GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum;
    /**
     * Output only. Cycle count.
     */
    cycleCount?: number;
    /**
     * Output only. Full charge capacity (mAmpere-hours).
     */
    fullChargeCapacity?: string;
    /**
     * Output only. Timestamp of when the sample was collected on device
     */
    reportTime?: string;
    /**
     * Output only. Sampling data for the battery sorted in a decreasing order of report_time.
     */
    sample?: GoogleChromeManagementV1BatterySampleReport[];
    /**
     * Output only. Battery serial number.
     */
    serialNumber?: string;
}
