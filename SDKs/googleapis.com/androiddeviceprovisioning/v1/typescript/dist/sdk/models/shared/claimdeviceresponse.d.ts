import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message containing device id of the claim.
 */
export declare class ClaimDeviceResponse extends SpeakeasyBase {
    /**
     * The device ID of the claimed device.
     */
    deviceId?: string;
    /**
     * The resource name of the device in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.
     */
    deviceName?: string;
}
