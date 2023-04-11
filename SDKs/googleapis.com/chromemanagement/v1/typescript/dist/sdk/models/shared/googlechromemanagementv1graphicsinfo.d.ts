import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1DisplayDevice } from "./googlechromemanagementv1displaydevice";
import { GoogleChromeManagementV1GraphicsAdapterInfo } from "./googlechromemanagementv1graphicsadapterinfo";
import { GoogleChromeManagementV1TouchScreenInfo } from "./googlechromemanagementv1touchscreeninfo";
/**
 * Information of the graphics subsystem. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceGraphicsStatus](https://chromeenterprise.google/policies/#ReportDeviceGraphicsStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
 */
export declare class GoogleChromeManagementV1GraphicsInfo extends SpeakeasyBase {
    /**
     * Information of a graphics adapter (GPU).
     */
    adapterInfo?: GoogleChromeManagementV1GraphicsAdapterInfo;
    /**
     * Output only. Information about the display(s) of the device.
     */
    displayDevices?: GoogleChromeManagementV1DisplayDevice[];
    /**
     * Output only. Is ePrivacy screen supported or not.
     */
    eprivacySupported?: boolean;
    /**
     * Information on the device touch screen.
     */
    touchScreenInfo?: GoogleChromeManagementV1TouchScreenInfo;
}
