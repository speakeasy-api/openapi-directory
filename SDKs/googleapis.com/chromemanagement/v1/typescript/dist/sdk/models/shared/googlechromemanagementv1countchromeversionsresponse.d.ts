import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1BrowserVersion } from "./googlechromemanagementv1browserversion";
/**
 * Response containing requested browser versions details and counts.
 */
export declare class GoogleChromeManagementV1CountChromeVersionsResponse extends SpeakeasyBase {
    /**
     * List of all browser versions and their install counts.
     */
    browserVersions?: GoogleChromeManagementV1BrowserVersion[];
    /**
     * Token to specify the next page of the request.
     */
    nextPageToken?: string;
    /**
     * Total number browser versions matching request.
     */
    totalSize?: number;
}
