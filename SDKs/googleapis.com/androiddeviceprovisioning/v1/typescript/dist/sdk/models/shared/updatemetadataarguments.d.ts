import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceIdentifier } from "./deviceidentifier";
import { DeviceMetadata } from "./devicemetadata";
/**
 * Identifies metadata updates to one device.
 */
export declare class UpdateMetadataArguments extends SpeakeasyBase {
    /**
     * Required. Device ID of the device.
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
}
