import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Severity of the state message.
 */
export declare enum GoogleCloudFunctionsV2StateMessageSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Error = "ERROR",
    Warning = "WARNING",
    Info = "INFO"
}
/**
 * Informational messages about the state of the Cloud Function or Operation.
 */
export declare class GoogleCloudFunctionsV2StateMessage extends SpeakeasyBase {
    /**
     * The message.
     */
    message?: string;
    /**
     * Severity of the state message.
     */
    severity?: GoogleCloudFunctionsV2StateMessageSeverityEnum;
    /**
     * One-word CamelCase type of the state message.
     */
    type?: string;
}
