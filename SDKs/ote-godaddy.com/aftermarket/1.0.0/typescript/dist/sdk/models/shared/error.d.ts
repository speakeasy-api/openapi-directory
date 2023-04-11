import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorField } from "./errorfield";
/**
 * Request was malformed
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
}
