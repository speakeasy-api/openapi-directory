import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Level to record this diagnostic.
 */
export declare enum DiagnosticLevelEnum {
    Unknown = "UNKNOWN",
    Information = "INFORMATION",
    Warning = "WARNING",
    Error = "ERROR"
}
export declare class Diagnostic extends SpeakeasyBase {
    /**
     * JsonPath expression on the resource that if non empty, indicates that this field needs to be extracted as a diagnostic.
     */
    field?: string;
    /**
     * Level to record this diagnostic.
     */
    level?: DiagnosticLevelEnum;
}
