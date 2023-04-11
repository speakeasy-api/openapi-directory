import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
/**
 * Response for `ListDevices`.
 */
export declare class ListDevicesResponse extends SpeakeasyBase {
    /**
     * The devices that match the request.
     */
    devices?: Device[];
    /**
     * If not empty, indicates that there may be more devices that match the request; this value should be passed in a new `ListDevicesRequest`.
     */
    nextPageToken?: string;
}
