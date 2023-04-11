import { SpeakeasyBase } from "../../../internal/utils";
import { Position } from "./position";
/**
 * A single stack element (frame) where an error occurred.
 */
export declare class StackTraceElement extends SpeakeasyBase {
    /**
     * Position contains source position information about the stack trace element such as line number, column number and length of the code block in bytes.
     */
    position?: Position;
    /**
     * The routine where the error occurred.
     */
    routine?: string;
    /**
     * The step the error occurred at.
     */
    step?: string;
}
