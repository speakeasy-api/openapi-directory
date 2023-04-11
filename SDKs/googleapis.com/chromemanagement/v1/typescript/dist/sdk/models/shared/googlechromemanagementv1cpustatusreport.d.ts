import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1CpuTemperatureInfo } from "./googlechromemanagementv1cputemperatureinfo";
/**
 * Provides information about the status of the CPU. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Every 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
 */
export declare class GoogleChromeManagementV1CpuStatusReport extends SpeakeasyBase {
    /**
     * Output only. CPU temperature sample info per CPU core in Celsius
     */
    cpuTemperatureInfo?: GoogleChromeManagementV1CpuTemperatureInfo[];
    /**
     * Output only. Sample of CPU utilization (0-100 percent).
     */
    cpuUtilizationPct?: number;
    /**
     * Output only. The timestamp in milliseconds representing time at which this report was sampled.
     */
    reportTime?: string;
    /**
     * Output only. Frequency the report is sampled.
     */
    sampleFrequency?: string;
}
