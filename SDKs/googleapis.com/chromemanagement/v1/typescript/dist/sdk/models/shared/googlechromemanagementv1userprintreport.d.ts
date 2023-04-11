import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Report for CountPrintJobsByUser, contains printing statistics for a user. Contains the number of printers, the number of devices used to initiate print jobs, and the number of print jobs initiated.
 */
export declare class GoogleChromeManagementV1UserPrintReport extends SpeakeasyBase {
    /**
     * Number of chrome devices that have been used to initiate print jobs by the user.
     */
    deviceCount?: string;
    /**
     * Number of print jobs initiated by the user.
     */
    jobCount?: string;
    /**
     * Number of printers used by the user.
     */
    printerCount?: string;
    /**
     * The primary e-mail address of the user.
     */
    userEmail?: string;
    /**
     * The unique Directory API ID of the user.
     */
    userId?: string;
}
