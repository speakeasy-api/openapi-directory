import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCloudidentityDevicesV1Device } from "./googleappscloudidentitydevicesv1device";
/**
 * Response message that is returned from the ListDevices method.
 */
export declare class GoogleAppsCloudidentityDevicesV1ListDevicesResponse extends SpeakeasyBase {
    /**
     * Devices meeting the list restrictions.
     */
    devices?: GoogleAppsCloudidentityDevicesV1Device[];
    /**
     * Token to retrieve the next page of results. Empty if there are no more results.
     */
    nextPageToken?: string;
}
