import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Report for CountPrintJobsByPrinter, contains statistics on printer usage. Contains the total number of print jobs initiated with this printer, the number of users and the number of devices that have initiated at least one print job with this printer.
 */
export declare class GoogleChromeManagementV1PrinterReport extends SpeakeasyBase {
    /**
     * Number of chrome devices that have been used to send print jobs to the specified printer.
     */
    deviceCount?: string;
    /**
     * Number of print jobs sent to the printer.
     */
    jobCount?: string;
    /**
     * Printer name.
     */
    printer?: string;
    /**
     * Printer API ID.
     */
    printerId?: string;
    /**
     * Printer model.
     */
    printerModel?: string;
    /**
     * Number of users that have sent print jobs to the printer.
     */
    userCount?: string;
}
