import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceUser } from "./deviceuser";
/**
 * Response message that is returned from the ListDeviceUsers method.
 */
export declare class ListDeviceUsersResponse extends SpeakeasyBase {
    /**
     * Devices meeting the list restrictions.
     */
    deviceUsers?: DeviceUser[];
    /**
     * Token to retrieve the next page of results. Empty if there are no more results.
     */
    nextPageToken?: string;
}
