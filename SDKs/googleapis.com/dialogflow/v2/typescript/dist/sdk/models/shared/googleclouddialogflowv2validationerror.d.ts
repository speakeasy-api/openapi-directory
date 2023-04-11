import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The severity of the error.
 */
export declare enum GoogleCloudDialogflowV2ValidationErrorSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR",
    Critical = "CRITICAL"
}
/**
 * Represents a single validation error.
 */
export declare class GoogleCloudDialogflowV2ValidationError extends SpeakeasyBase {
    /**
     * The names of the entries that the error is associated with. Format: - "projects//agent", if the error is associated with the entire agent. - "projects//agent/intents/", if the error is associated with certain intents. - "projects//agent/intents//trainingPhrases/", if the error is associated with certain intent training phrases. - "projects//agent/intents//parameters/", if the error is associated with certain intent parameters. - "projects//agent/entities/", if the error is associated with certain entities.
     */
    entries?: string[];
    /**
     * The detailed error message.
     */
    errorMessage?: string;
    /**
     * The severity of the error.
     */
    severity?: GoogleCloudDialogflowV2ValidationErrorSeverityEnum;
}
