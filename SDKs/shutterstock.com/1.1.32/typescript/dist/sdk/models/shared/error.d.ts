import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Error object
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * The error code of this error
     */
    code?: string;
    /**
     * Debugging information about the error
     */
    data?: string;
    /**
     * A list of items that produced the error
     */
    items?: Record<string, any>[];
    /**
     * Specific details about this error
     */
    message: string;
    /**
     * Internal code reference to the source of the error
     */
    path?: string;
}
