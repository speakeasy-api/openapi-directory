import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Sampling data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
 */
export declare class GoogleChromeManagementV1BatterySampleReport extends SpeakeasyBase {
    /**
     * Output only. Battery charge percentage.
     */
    chargeRate?: number;
    /**
     * Output only. Battery current (mA).
     */
    current?: string;
    /**
     * Output only. The battery discharge rate measured in mW. Positive if the battery is being discharged, negative if it's being charged.
     */
    dischargeRate?: number;
    /**
     * Output only. Battery remaining capacity (mAmpere-hours).
     */
    remainingCapacity?: string;
    /**
     * Output only. Timestamp of when the sample was collected on device
     */
    reportTime?: string;
    /**
     * Output only. Battery status read from sysfs. Example: Discharging
     */
    status?: string;
    /**
     * Output only. Temperature in Celsius degrees.
     */
    temperature?: number;
    /**
     * Output only. Battery voltage (millivolt).
     */
    voltage?: string;
}
