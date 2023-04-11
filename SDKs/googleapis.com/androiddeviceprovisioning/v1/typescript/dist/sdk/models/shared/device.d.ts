import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceClaim } from "./deviceclaim";
import { DeviceIdentifier } from "./deviceidentifier";
import { DeviceMetadata } from "./devicemetadata";
/**
 * An Android or Chrome OS device registered for zero-touch enrollment.
 */
export declare class Device extends SpeakeasyBase {
    /**
     * Output only. The provisioning claims for a device. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. Call `partners.devices.unclaim` or `partners.devices.unclaimAsync` to remove the device from zero-touch enrollment.
     */
    claims?: DeviceClaim[];
    /**
     * Not available to resellers.
     */
    configuration?: string;
    /**
     * Output only. The ID of the device. Assigned by the server.
     */
    deviceId?: string;
    /**
     * Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).
     */
    deviceIdentifier?: DeviceIdentifier;
    /**
     * Metadata entries that can be attached to a `Device`. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata).
     */
    deviceMetadata?: DeviceMetadata;
    /**
     * Output only. The API resource name in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`. Assigned by the server.
     */
    name?: string;
}
