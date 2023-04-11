import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a device associated with telemetry data.
 */
export declare class GoogleChromeManagementV1TelemetryDeviceInfo extends SpeakeasyBase {
    /**
     * Output only. The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab.
     */
    deviceId?: string;
    /**
     * Output only. Organization unit ID of the device.
     */
    orgUnitId?: string;
}
