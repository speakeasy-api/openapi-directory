import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceIdentifier } from "./deviceidentifier";
/**
 * Request to find devices.
 */
export declare class FindDevicesByDeviceIdentifierRequest extends SpeakeasyBase {
    /**
     * Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).
     */
    deviceIdentifier?: DeviceIdentifier;
    /**
     * Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.
     */
    limit?: string;
    /**
     * A token specifying which result page to return.
     */
    pageToken?: string;
}
