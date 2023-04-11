import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of error.
 */
export declare enum ScriptErrorErrorCodeEnum {
    ErrorCodeUnspecified = "ERROR_CODE_UNSPECIFIED",
    SyntaxError = "SYNTAX_ERROR",
    DeprecatedSyntax = "DEPRECATED_SYNTAX",
    InternalError = "INTERNAL_ERROR"
}
/**
 * An error message for a custom bidding script.
 */
export declare class ScriptError extends SpeakeasyBase {
    /**
     * The column number in the script where the error was thrown.
     */
    column?: string;
    /**
     * The type of error.
     */
    errorCode?: ScriptErrorErrorCodeEnum;
    /**
     * The detailed error message.
     */
    errorMessage?: string;
    /**
     * The line number in the script where the error was thrown.
     */
    line?: string;
}
