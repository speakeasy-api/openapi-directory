import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The severity of the error.
 */
export declare enum ImportErrorSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Error = "ERROR",
    Warning = "WARNING",
    Info = "INFO"
}
/**
 * A resource that reports the errors encountered while processing an import job.
 */
export declare class ImportError extends SpeakeasyBase {
    /**
     * The error information.
     */
    errorDetails?: string;
    /**
     * The severity of the error.
     */
    severity?: ImportErrorSeverityEnum;
}
