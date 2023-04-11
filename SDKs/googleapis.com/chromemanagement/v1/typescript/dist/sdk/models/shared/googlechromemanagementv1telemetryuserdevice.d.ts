import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1AudioStatusReport } from "./googlechromemanagementv1audiostatusreport";
import { GoogleChromeManagementV1PeripheralsReport } from "./googlechromemanagementv1peripheralsreport";
/**
 * Telemetry data collected for a managed user and device.
 */
export declare class GoogleChromeManagementV1TelemetryUserDevice extends SpeakeasyBase {
    /**
     * Output only. Audio reports collected periodically sorted in a decreasing order of report_time.
     */
    audioStatusReport?: GoogleChromeManagementV1AudioStatusReport[];
    /**
     * The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab.
     */
    deviceId?: string;
    /**
     * Output only. Peripherals reports collected periodically sorted in a decreasing order of report_time.
     */
    peripheralsReport?: GoogleChromeManagementV1PeripheralsReport[];
}
