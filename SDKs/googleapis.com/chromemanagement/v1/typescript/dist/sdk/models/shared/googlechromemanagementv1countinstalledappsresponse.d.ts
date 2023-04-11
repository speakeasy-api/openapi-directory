import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1InstalledApp } from "./googlechromemanagementv1installedapp";
/**
 * Response containing details of queried installed apps.
 */
export declare class GoogleChromeManagementV1CountInstalledAppsResponse extends SpeakeasyBase {
    /**
     * List of installed apps matching request.
     */
    installedApps?: GoogleChromeManagementV1InstalledApp[];
    /**
     * Token to specify the next page of the request.
     */
    nextPageToken?: string;
    /**
     * Total number of installed apps matching request.
     */
    totalSize?: number;
}
