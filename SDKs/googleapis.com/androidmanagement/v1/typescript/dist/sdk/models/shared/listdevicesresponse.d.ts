import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
/**
 * Response to a request to list devices for a given enterprise.
 */
export declare class ListDevicesResponse extends SpeakeasyBase {
    /**
     * The list of devices.
     */
    devices?: Device[];
    /**
     * If there are more results, a token to retrieve next page of results.
     */
    nextPageToken?: string;
}
