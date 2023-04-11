import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorField } from "./errorfield";
/**
 * marketId is required<br>regionTypeId is not a valid integer<br>regionName is required when regionTypeId is provided<br>regionTypeId is required when regionName is provided
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * Short identifier for the error, suitable for indicating the specific error within client code
     */
    code: string;
    /**
     * List of the specific fields, and the errors found with their contents
     */
    fields?: ErrorField[];
    /**
     * Human-readable, English description of the error
     */
    message?: string;
    /**
     * Stack trace indicating where the error occurred.<br/>
     *
     * @remarks
     * NOTE: This attribute <strong>MAY</strong> be included for Development and Test environments.
     * However, it <strong>MUST NOT</strong> be exposed from OTE nor Production systems
     */
    stack?: string[];
}
