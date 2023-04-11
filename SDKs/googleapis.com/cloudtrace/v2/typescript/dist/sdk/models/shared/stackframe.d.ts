import { SpeakeasyBase } from "../../../internal/utils";
import { Module } from "./module";
import { TruncatableString } from "./truncatablestring";
/**
 * Represents a single stack frame in a stack trace.
 */
export declare class StackFrame extends SpeakeasyBase {
    /**
     * The column number where the function call appears, if available. This is important in JavaScript because of its anonymous functions.
     */
    columnNumber?: string;
    /**
     * Represents a string that might be shortened to a specified length.
     */
    fileName?: TruncatableString;
    /**
     * Represents a string that might be shortened to a specified length.
     */
    functionName?: TruncatableString;
    /**
     * The line number in `file_name` where the function call appears.
     */
    lineNumber?: string;
    /**
     * Binary module.
     */
    loadModule?: Module;
    /**
     * Represents a string that might be shortened to a specified length.
     */
    originalFunctionName?: TruncatableString;
    /**
     * Represents a string that might be shortened to a specified length.
     */
    sourceVersion?: TruncatableString;
}
