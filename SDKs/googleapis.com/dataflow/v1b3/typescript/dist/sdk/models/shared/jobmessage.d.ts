import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Importance level of the message.
 */
export declare enum JobMessageMessageImportanceEnum {
    JobMessageImportanceUnknown = "JOB_MESSAGE_IMPORTANCE_UNKNOWN",
    JobMessageDebug = "JOB_MESSAGE_DEBUG",
    JobMessageDetailed = "JOB_MESSAGE_DETAILED",
    JobMessageBasic = "JOB_MESSAGE_BASIC",
    JobMessageWarning = "JOB_MESSAGE_WARNING",
    JobMessageError = "JOB_MESSAGE_ERROR"
}
/**
 * A particular message pertaining to a Dataflow job.
 */
export declare class JobMessage extends SpeakeasyBase {
    /**
     * Deprecated.
     */
    id?: string;
    /**
     * Importance level of the message.
     */
    messageImportance?: JobMessageMessageImportanceEnum;
    /**
     * The text of the message.
     */
    messageText?: string;
    /**
     * The timestamp of the message.
     */
    time?: string;
}
