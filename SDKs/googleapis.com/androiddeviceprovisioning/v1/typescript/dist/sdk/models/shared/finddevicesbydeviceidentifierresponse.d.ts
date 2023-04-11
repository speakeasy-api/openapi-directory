import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
/**
 * Response containing found devices.
 */
export declare class FindDevicesByDeviceIdentifierResponse extends SpeakeasyBase {
    /**
     * Found devices.
     */
    devices?: Device[];
    /**
     * A token used to access the next page of results. Omitted if no further results are available.
     */
    nextPageToken?: string;
    /**
     * The total count of items in the list irrespective of pagination.
     */
    totalSize?: number;
}
