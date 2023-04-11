import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1Device } from "./googlechromemanagementv1device";
/**
 * Response containing a list of devices with queried app installed.
 */
export declare class GoogleChromeManagementV1FindInstalledAppDevicesResponse extends SpeakeasyBase {
    /**
     * A list of devices which have the app installed. Sorted in ascending alphabetical order on the Device.machine field.
     */
    devices?: GoogleChromeManagementV1Device[];
    /**
     * Token to specify the next page of the request.
     */
    nextPageToken?: string;
    /**
     * Total number of devices matching request.
     */
    totalSize?: number;
}
