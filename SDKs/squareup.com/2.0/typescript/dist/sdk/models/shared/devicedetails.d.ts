import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about the device that took the payment.
 */
export declare class DeviceDetails extends SpeakeasyBase {
    /**
     * The Square-issued ID of the device.
     */
    deviceId?: string;
    /**
     * The Square-issued installation ID for the device.
     */
    deviceInstallationId?: string;
    /**
     * The name of the device set by the seller.
     */
    deviceName?: string;
}
