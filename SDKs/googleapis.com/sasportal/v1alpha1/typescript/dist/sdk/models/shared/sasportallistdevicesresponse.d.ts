import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalDevice } from "./sasportaldevice";
/**
 * Response for ListDevices.
 */
export declare class SasPortalListDevicesResponse extends SpeakeasyBase {
    /**
     * The devices that match the request.
     */
    devices?: SasPortalDevice[];
    /**
     * A pagination token returned from a previous call to ListDevices that indicates from where listing should continue. If the field is missing or empty, it means there is no more devices.
     */
    nextPageToken?: string;
}
