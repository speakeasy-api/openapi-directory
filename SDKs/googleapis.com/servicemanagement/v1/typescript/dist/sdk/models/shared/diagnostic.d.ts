import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The kind of diagnostic information provided.
 */
export declare enum DiagnosticKindEnum {
    Warning = "WARNING",
    Error = "ERROR"
}
/**
 * Represents a diagnostic message (error or warning)
 */
export declare class Diagnostic extends SpeakeasyBase {
    /**
     * The kind of diagnostic information provided.
     */
    kind?: DiagnosticKindEnum;
    /**
     * File name and line number of the error or warning.
     */
    location?: string;
    /**
     * Message describing the error or warning.
     */
    message?: string;
}
