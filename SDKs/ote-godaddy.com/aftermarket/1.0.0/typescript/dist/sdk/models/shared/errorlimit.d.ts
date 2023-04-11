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
}
