import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message severity.
 */
export declare enum TransferMessageSeverityEnum {
    MessageSeverityUnspecified = "MESSAGE_SEVERITY_UNSPECIFIED",
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR"
}
/**
 * Represents a user facing message for a particular data transfer run.
 */
export declare class TransferMessage extends SpeakeasyBase {
    /**
     * Message text.
     */
    messageText?: string;
    /**
     * Time when message was logged.
     */
    messageTime?: string;
    /**
     * Message severity.
     */
    severity?: TransferMessageSeverityEnum;
}
