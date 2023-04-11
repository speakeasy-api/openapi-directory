import { SpeakeasyBase } from "../../../internal/utils";
import { FailureInfo } from "./failureinfo";
/**
 * Response for deleting existing printers in batch.
 */
export declare class BatchDeletePrintersResponse extends SpeakeasyBase {
    /**
     * A list of update failures.
     */
    failedPrinters?: FailureInfo[];
    /**
     * A list of Printer.id that were successfully deleted.
     */
    printerIds?: string[];
}
