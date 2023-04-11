import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message severity
 */
export declare enum AuxiliaryMessageSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    SeverityInfo = "SEVERITY_INFO",
    SeverityWarning = "SEVERITY_WARNING",
    SeverityError = "SEVERITY_ERROR"
}
/**
 * Auxiliary message about issues with printers or settings. Example: {message_type:AUXILIARY_MESSAGE_WARNING, field_mask:make_and_model, message:"Given printer is invalid or no longer supported."}
 */
export declare class AuxiliaryMessage extends SpeakeasyBase {
    /**
     * Human readable message in English. Example: "Given printer is invalid or no longer supported."
     */
    auxiliaryMessage?: string;
    /**
     * Field that this message concerns.
     */
    fieldMask?: string;
    /**
     * Message severity
     */
    severity?: AuxiliaryMessageSeverityEnum;
}
