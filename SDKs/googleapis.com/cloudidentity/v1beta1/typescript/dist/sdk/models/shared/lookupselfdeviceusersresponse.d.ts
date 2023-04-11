import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response containing resource names of the DeviceUsers associated with the caller's credentials.
 */
export declare class LookupSelfDeviceUsersResponse extends SpeakeasyBase {
    /**
     * The customer Id that may be passed back to other Devices API methods such as List, Get, etc.
     */
    customer?: string;
    /**
     * [Resource names](https://cloud.google.com/apis/design/resource_names) of the DeviceUsers in the format: `devices/{device_id}/deviceUsers/{user_resource_id}`, where device_id is the unique ID assigned to a Device and user_resource_id is the unique user ID
     */
    names?: string[];
    /**
     * Token to retrieve the next page of results. Empty if there are no more results.
     */
    nextPageToken?: string;
}
