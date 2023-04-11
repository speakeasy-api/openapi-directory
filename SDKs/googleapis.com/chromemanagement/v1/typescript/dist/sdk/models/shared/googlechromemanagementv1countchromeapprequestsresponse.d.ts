import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1ChromeAppRequest } from "./googlechromemanagementv1chromeapprequest";
/**
 * Response containing summary of requested app installations.
 */
export declare class GoogleChromeManagementV1CountChromeAppRequestsResponse extends SpeakeasyBase {
    /**
     * Token to specify the next page in the list.
     */
    nextPageToken?: string;
    /**
     * Count of requested apps matching request.
     */
    requestedApps?: GoogleChromeManagementV1ChromeAppRequest[];
    /**
     * Total number of matching app requests.
     */
    totalSize?: number;
}
