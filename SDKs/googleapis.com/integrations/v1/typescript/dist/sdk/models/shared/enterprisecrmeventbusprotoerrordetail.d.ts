import { SpeakeasyBase } from "../../../internal/utils";
import { CrmlogErrorCode } from "./crmlogerrorcode";
/**
 * The severity of the error: ERROR|WARN|INFO.
 */
export declare enum EnterpriseCrmEventbusProtoErrorDetailSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Error = "ERROR",
    Warn = "WARN",
    Info = "INFO"
}
/**
 * An error, warning, or information message associated with a workflow.
 */
export declare class EnterpriseCrmEventbusProtoErrorDetail extends SpeakeasyBase {
    /**
     * Registered ids for errors, as "oneof" enums. Each task or logical grouping of tasks may share the same enum.
     */
    errorCode?: CrmlogErrorCode;
    /**
     * The full text of the error message, including any parameters that were thrown along with the exception.
     */
    errorMessage?: string;
    /**
     * The severity of the error: ERROR|WARN|INFO.
     */
    severity?: EnterpriseCrmEventbusProtoErrorDetailSeverityEnum;
    /**
     * The task try-number, in which, the error occurred. If zero, the error happened at the event level.
     */
    taskNumber?: number;
}
