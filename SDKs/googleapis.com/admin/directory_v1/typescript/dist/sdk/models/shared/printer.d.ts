import { SpeakeasyBase } from "../../../internal/utils";
import { AuxiliaryMessage } from "./auxiliarymessage";
/**
 * Printer configuration.
 */
export declare class Printer extends SpeakeasyBase {
    /**
     * Output only. Auxiliary messages about issues with the printer configuration if any.
     */
    auxiliaryMessages?: AuxiliaryMessage[];
    /**
     * Output only. Time when printer was created.
     */
    createTime?: string;
    /**
     * Editable. Description of printer.
     */
    description?: string;
    /**
     * Editable. Name of printer.
     */
    displayName?: string;
    /**
     * Id of the printer. (During printer creation leave empty)
     */
    id?: string;
    /**
     * Editable. Make and model of printer. e.g. Lexmark MS610de Value must be in format as seen in ListPrinterModels response.
     */
    makeAndModel?: string;
    /**
     * The resource name of the Printer object, in the format customers/{customer-id}/printers/{printer-id} (During printer creation leave empty)
     */
    name?: string;
    /**
     * Organization Unit that owns this printer (Only can be set during Printer creation)
     */
    orgUnitId?: string;
    /**
     * Editable. Printer URI.
     */
    uri?: string;
    /**
     * Editable. flag to use driverless configuration or not. If it's set to be true, make_and_model can be ignored
     */
    useDriverlessConfig?: boolean;
}
/**
 * Printer configuration.
 */
export declare class PrinterInput extends SpeakeasyBase {
    /**
     * Editable. Description of printer.
     */
    description?: string;
    /**
     * Editable. Name of printer.
     */
    displayName?: string;
    /**
     * Id of the printer. (During printer creation leave empty)
     */
    id?: string;
    /**
     * Editable. Make and model of printer. e.g. Lexmark MS610de Value must be in format as seen in ListPrinterModels response.
     */
    makeAndModel?: string;
    /**
     * The resource name of the Printer object, in the format customers/{customer-id}/printers/{printer-id} (During printer creation leave empty)
     */
    name?: string;
    /**
     * Organization Unit that owns this printer (Only can be set during Printer creation)
     */
    orgUnitId?: string;
    /**
     * Editable. Printer URI.
     */
    uri?: string;
    /**
     * Editable. flag to use driverless configuration or not. If it's set to be true, make_and_model can be ignored
     */
    useDriverlessConfig?: boolean;
}
