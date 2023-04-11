import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceMetadata } from "./devicemetadata";
/**
 * Request to set metadata for a device.
 */
export declare class UpdateDeviceMetadataRequest extends SpeakeasyBase {
    /**
     * Metadata entries that can be attached to a `Device`. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata).
     */
    deviceMetadata?: DeviceMetadata;
}
