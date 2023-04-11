import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1DisplayInfo } from "./googlechromemanagementv1displayinfo";
/**
 * Information of the graphics subsystem. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceGraphicsInfo](https://chromeenterprise.google/policies/#ReportDeviceGraphicsInfo) * Data Collection Frequency: 3 hours. * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
 */
export declare class GoogleChromeManagementV1GraphicsStatusReport extends SpeakeasyBase {
    /**
     * Output only. Information about the displays for the device.
     */
    displays?: GoogleChromeManagementV1DisplayInfo[];
    /**
     * Output only. Time at which the graphics data was reported.
     */
    reportTime?: string;
}
