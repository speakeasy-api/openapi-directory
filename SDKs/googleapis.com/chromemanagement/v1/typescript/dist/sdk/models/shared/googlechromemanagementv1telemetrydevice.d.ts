import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1AudioStatusReport } from "./googlechromemanagementv1audiostatusreport";
import { GoogleChromeManagementV1BatteryInfo } from "./googlechromemanagementv1batteryinfo";
import { GoogleChromeManagementV1BatteryStatusReport } from "./googlechromemanagementv1batterystatusreport";
import { GoogleChromeManagementV1BootPerformanceReport } from "./googlechromemanagementv1bootperformancereport";
import { GoogleChromeManagementV1CpuInfo } from "./googlechromemanagementv1cpuinfo";
import { GoogleChromeManagementV1CpuStatusReport } from "./googlechromemanagementv1cpustatusreport";
import { GoogleChromeManagementV1GraphicsInfo } from "./googlechromemanagementv1graphicsinfo";
import { GoogleChromeManagementV1GraphicsStatusReport } from "./googlechromemanagementv1graphicsstatusreport";
import { GoogleChromeManagementV1MemoryInfo } from "./googlechromemanagementv1memoryinfo";
import { GoogleChromeManagementV1MemoryStatusReport } from "./googlechromemanagementv1memorystatusreport";
import { GoogleChromeManagementV1NetworkDiagnosticsReport } from "./googlechromemanagementv1networkdiagnosticsreport";
import { GoogleChromeManagementV1NetworkInfo } from "./googlechromemanagementv1networkinfo";
import { GoogleChromeManagementV1NetworkStatusReport } from "./googlechromemanagementv1networkstatusreport";
import { GoogleChromeManagementV1OsUpdateStatus } from "./googlechromemanagementv1osupdatestatus";
import { GoogleChromeManagementV1PeripheralsReport } from "./googlechromemanagementv1peripheralsreport";
import { GoogleChromeManagementV1StorageInfo } from "./googlechromemanagementv1storageinfo";
import { GoogleChromeManagementV1StorageStatusReport } from "./googlechromemanagementv1storagestatusreport";
import { GoogleChromeManagementV1ThunderboltInfo } from "./googlechromemanagementv1thunderboltinfo";
/**
 * Telemetry data collected from a managed device.
 */
export declare class GoogleChromeManagementV1TelemetryDevice extends SpeakeasyBase {
    /**
     * Output only. Audio reports collected periodically sorted in a decreasing order of report_time.
     */
    audioStatusReport?: GoogleChromeManagementV1AudioStatusReport[];
    /**
     * Output only. Information on battery specs for the device.
     */
    batteryInfo?: GoogleChromeManagementV1BatteryInfo[];
    /**
     * Output only. Battery reports collected periodically.
     */
    batteryStatusReport?: GoogleChromeManagementV1BatteryStatusReport[];
    /**
     * Output only. Boot performance reports of the device.
     */
    bootPerformanceReport?: GoogleChromeManagementV1BootPerformanceReport[];
    /**
     * Output only. Information regarding CPU specs for the device.
     */
    cpuInfo?: GoogleChromeManagementV1CpuInfo[];
    /**
     * Output only. CPU status reports collected periodically sorted in a decreasing order of report_time.
     */
    cpuStatusReport?: GoogleChromeManagementV1CpuStatusReport[];
    /**
     * Output only. Google Workspace Customer whose enterprise enrolled the device.
     */
    customer?: string;
    /**
     * Output only. The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab
     */
    deviceId?: string;
    /**
     * Information of the graphics subsystem. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceGraphicsStatus](https://chromeenterprise.google/policies/#ReportDeviceGraphicsStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
     */
    graphicsInfo?: GoogleChromeManagementV1GraphicsInfo;
    /**
     * Output only. Graphics reports collected periodically.
     */
    graphicsStatusReport?: GoogleChromeManagementV1GraphicsStatusReport[];
    /**
     * Memory information of a device. * This field has both telemetry and device information: - `totalRamBytes` - Device information - `availableRamBytes` - Telemetry information - `totalMemoryEncryption` - Device information * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: - `totalRamBytes` - Only at upload - `availableRamBytes` - Every 10 minutes - `totalMemoryEncryption` - at device startup * Default Data Reporting Frequency: - `totalRamBytes` - 3 hours - `availableRamBytes` - 3 hours - `totalMemoryEncryption` - at device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: only for `totalMemoryEncryption` * Reported for affiliated users only: N/A
     */
    memoryInfo?: GoogleChromeManagementV1MemoryInfo;
    /**
     * Output only. Memory status reports collected periodically sorted decreasing by report_time.
     */
    memoryStatusReport?: GoogleChromeManagementV1MemoryStatusReport[];
    /**
     * Output only. Resource name of the device.
     */
    name?: string;
    /**
     * Output only. Network diagnostics collected periodically.
     */
    networkDiagnosticsReport?: GoogleChromeManagementV1NetworkDiagnosticsReport[];
    /**
     * Network device information. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
     */
    networkInfo?: GoogleChromeManagementV1NetworkInfo;
    /**
     * Output only. Network specs collected periodically.
     */
    networkStatusReport?: GoogleChromeManagementV1NetworkStatusReport[];
    /**
     * Output only. Organization unit ID of the device.
     */
    orgUnitId?: string;
    /**
     * Output only. Contains relevant information regarding ChromeOS update status.
     */
    osUpdateStatus?: GoogleChromeManagementV1OsUpdateStatus[];
    /**
     * Output only. Peripherals reports collected periodically sorted in a decreasing order of report_time.
     */
    peripheralsReport?: GoogleChromeManagementV1PeripheralsReport[];
    /**
     * Output only. Device serial number. This value is the same as the Admin Console's Serial Number in the ChromeOS Devices tab.
     */
    serialNumber?: string;
    /**
     * Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
     */
    storageInfo?: GoogleChromeManagementV1StorageInfo;
    /**
     * Output only. Storage reports collected periodically.
     */
    storageStatusReport?: GoogleChromeManagementV1StorageStatusReport[];
    /**
     * Output only. Information on Thunderbolt bus.
     */
    thunderboltInfo?: GoogleChromeManagementV1ThunderboltInfo[];
}
