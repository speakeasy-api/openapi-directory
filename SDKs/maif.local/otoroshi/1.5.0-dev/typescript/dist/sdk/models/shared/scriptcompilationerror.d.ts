import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The error of the compilation of a Script
 */
export declare class ScriptCompilationError extends SpeakeasyBase {
    /**
     * The column of the error
     */
    column: string;
    /**
     * The file where the error is located
     */
    file: Record<string, string>;
    /**
     * The line of the error
     */
    line: string;
    /**
     * The message to display for the error
     */
    message: Record<string, string>;
    /**
     * The raw message from the compiler
     */
    rawMessage: Record<string, string>;
}
