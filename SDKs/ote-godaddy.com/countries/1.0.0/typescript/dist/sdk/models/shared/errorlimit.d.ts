import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorField } from "./errorfield";
/**
 * Too many requests received within interval
 */
export declare class ErrorLimit extends SpeakeasyBase {
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
     * Number of seconds to wait before attempting a similar request
     */
    retryAfterSec: number;
    /**
     * Stack trace indicating where the error occurred.<br/>
     *
     * @remarks
     * NOTE: This attribute <strong>MAY</strong> be included for Development and Test environments.
     * However, it <strong>MUST NOT</strong> be exposed from OTE nor Production systems
     */
    stack?: string[];
}
