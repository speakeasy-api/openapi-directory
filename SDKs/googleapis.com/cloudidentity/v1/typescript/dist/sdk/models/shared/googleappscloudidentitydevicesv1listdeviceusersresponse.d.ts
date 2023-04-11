import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCloudidentityDevicesV1DeviceUser } from "./googleappscloudidentitydevicesv1deviceuser";
/**
 * Response message that is returned from the ListDeviceUsers method.
 */
export declare class GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse extends SpeakeasyBase {
    /**
     * Devices meeting the list restrictions.
     */
    deviceUsers?: GoogleAppsCloudidentityDevicesV1DeviceUser[];
    /**
     * Token to retrieve the next page of results. Empty if there are no more results.
     */
    nextPageToken?: string;
}
