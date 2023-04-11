import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
/**
 * Response message that is returned from the ListDevices method.
 */
export declare class ListDevicesResponse extends SpeakeasyBase {
    /**
     * Devices meeting the list restrictions.
     */
    devices?: Device[];
    /**
     * Token to retrieve the next page of results. Empty if there are no more results.
     */
    nextPageToken?: string;
}
