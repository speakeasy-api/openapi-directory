import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for deleting existing printers in batch.
 */
export declare class BatchDeletePrintersRequest extends SpeakeasyBase {
    /**
     * A list of Printer.id that should be deleted. Max 100 at a time.
     */
    printerIds?: string[];
}
