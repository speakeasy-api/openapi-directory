import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1UsbPeripheralReport } from "./googlechromemanagementv1usbperipheralreport";
/**
 * `TelemetryUsbPeripheralsEvent` is triggered USB devices are either added or removed.
 */
export declare class GoogleChromeManagementV1TelemetryUsbPeripheralsEvent extends SpeakeasyBase {
    /**
     * List of usb devices that were either added or removed.
     */
    usbPeripheralReport?: GoogleChromeManagementV1UsbPeripheralReport[];
}
