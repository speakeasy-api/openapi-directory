import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Report for CountChromeDevicesPerHardwareSpecResponse, contains the count of devices with a unique hardware specification.
 */
export declare class GoogleChromeManagementV1DeviceHardwareCountReport extends SpeakeasyBase {
    /**
     * Public name of the hardware specification.
     */
    bucket?: string;
    /**
     * Count of devices with a unique hardware specification.
     */
    count?: string;
}
