import { SpeakeasyBase } from "../../../internal/utils";
import { StackTrace } from "./stacktrace";
/**
 * Error describes why the execution was abnormally terminated.
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * Human-readable stack trace string.
     */
    context?: string;
    /**
     * Error message and data returned represented as a JSON string.
     */
    payload?: string;
    /**
     * A collection of stack elements (frames) where an error occurred.
     */
    stackTrace?: StackTrace;
}
