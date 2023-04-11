import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1UserPrintReport } from "./googlechromemanagementv1userprintreport";
/**
 * Response containing a summary printing report for each user that has initiated a print job with a printer from the specified organizational unit during the requested time interval.
 */
export declare class GoogleChromeManagementV1CountPrintJobsByUserResponse extends SpeakeasyBase {
    /**
     * Pagination token for requesting the next page.
     */
    nextPageToken?: string;
    /**
     * Total number of users matching request.
     */
    totalSize?: string;
    /**
     * List of UserPrintReports matching request.
     */
    userPrintReports?: GoogleChromeManagementV1UserPrintReport[];
}
