import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1UsbPeripheralReport } from "./googlechromemanagementv1usbperipheralreport";
/**
 * Peripherals report.
 */
export declare class GoogleChromeManagementV1PeripheralsReport extends SpeakeasyBase {
    /**
     * Output only. Timestamp of when the report was collected.
     */
    reportTime?: string;
    /**
     * Reports of all usb connected devices.
     */
    usbPeripheralReport?: GoogleChromeManagementV1UsbPeripheralReport[];
}
