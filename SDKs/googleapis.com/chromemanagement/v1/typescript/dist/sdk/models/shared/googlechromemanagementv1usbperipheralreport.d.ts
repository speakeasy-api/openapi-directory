import { SpeakeasyBase } from "../../../internal/utils";
/**
 * USB connected peripheral report.
 */
export declare class GoogleChromeManagementV1UsbPeripheralReport extends SpeakeasyBase {
    /**
     * Output only. Categories the device belongs to https://www.usb.org/defined-class-codes
     */
    categories?: string[];
    /**
     * Output only. Class ID https://www.usb.org/defined-class-codes
     */
    classId?: number;
    /**
     * Output only. Firmware version
     */
    firmwareVersion?: string;
    /**
     * Output only. Device name, model name, or product name
     */
    name?: string;
    /**
     * Output only. Product ID
     */
    pid?: number;
    /**
     * Output only. Subclass ID https://www.usb.org/defined-class-codes
     */
    subclassId?: number;
    /**
     * Output only. Vendor name
     */
    vendor?: string;
    /**
     * Output only. Vendor ID
     */
    vid?: number;
}
