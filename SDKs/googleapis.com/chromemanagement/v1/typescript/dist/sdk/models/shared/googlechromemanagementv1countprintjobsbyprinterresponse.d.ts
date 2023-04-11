import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1PrinterReport } from "./googlechromemanagementv1printerreport";
/**
 * Response containing a summary printing report for each printer from the specified organizational unit for the requested time interval.
 */
export declare class GoogleChromeManagementV1CountPrintJobsByPrinterResponse extends SpeakeasyBase {
    /**
     * Pagination token for requesting the next page.
     */
    nextPageToken?: string;
    /**
     * List of PrinterReports matching request.
     */
    printerReports?: GoogleChromeManagementV1PrinterReport[];
    /**
     * Total number of printers matching request.
     */
    totalSize?: string;
}
