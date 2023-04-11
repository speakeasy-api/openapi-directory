import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The error type is returned when an error occurred in the platform.
 *
 * @remarks
 *
 * Error codes include:
 *
 * - 10404: resource was not found
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * Error code
     */
    code: string;
    /**
     * Message describing the error
     */
    message: string;
}
