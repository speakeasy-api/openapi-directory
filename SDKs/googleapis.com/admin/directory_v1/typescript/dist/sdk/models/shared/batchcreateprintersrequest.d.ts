import { SpeakeasyBase } from "../../../internal/utils";
import { CreatePrinterRequestInput } from "./createprinterrequest";
/**
 * Request for adding new printers in batch.
 */
export declare class BatchCreatePrintersRequestInput extends SpeakeasyBase {
    /**
     * A list of Printers to be created. Max 50 at a time.
     */
    requests?: CreatePrinterRequestInput[];
}
