import { SpeakeasyBase } from "../../../internal/utils";
import { PrinterInput } from "./printer";
/**
 * Request for adding a new printer.
 */
export declare class CreatePrinterRequestInput extends SpeakeasyBase {
    /**
     * Required. The name of the customer. Format: customers/{customer_id}
     */
    parent?: string;
    /**
     * Printer configuration.
     */
    printer?: PrinterInput;
}
