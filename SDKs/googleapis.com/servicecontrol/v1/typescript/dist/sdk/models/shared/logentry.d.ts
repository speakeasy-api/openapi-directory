import { SpeakeasyBase } from "../../../internal/utils";
import { HttpRequest } from "./httprequest";
import { LogEntryOperation } from "./logentryoperation";
import { LogEntrySourceLocation } from "./logentrysourcelocation";
/**
 * The severity of the log entry. The default value is `LogSeverity.DEFAULT`.
 */
export declare enum LogEntrySeverityEnum {
    Default = "DEFAULT",
    Debug = "DEBUG",
    Info = "INFO",
    Notice = "NOTICE",
    Warning = "WARNING",
    Error = "ERROR",
    Critical = "CRITICAL",
    Alert = "ALERT",
    Emergency = "EMERGENCY"
}
/**
 * An individual log entry.
 */
export declare class LogEntry extends SpeakeasyBase {
    /**
     * A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message.
     */
    httpRequest?: HttpRequest;
    /**
     * A unique ID for the log entry used for deduplication. If omitted, the implementation will generate one based on operation_id.
     */
    insertId?: string;
    /**
     * A set of user-defined (key, value) data that provides additional information about the log entry.
     */
    labels?: Record<string, string>;
    /**
     * Required. The log to which this log entry belongs. Examples: `"syslog"`, `"book_log"`.
     */
    name?: string;
    /**
     * Additional information about a potentially long-running operation with which a log entry is associated.
     */
    operation?: LogEntryOperation;
    /**
     * The log entry payload, represented as a protocol buffer that is expressed as a JSON object. The only accepted type currently is AuditLog.
     */
    protoPayload?: Record<string, any>;
    /**
     * The severity of the log entry. The default value is `LogSeverity.DEFAULT`.
     */
    severity?: LogEntrySeverityEnum;
    /**
     * Additional information about the source code location that produced the log entry.
     */
    sourceLocation?: LogEntrySourceLocation;
    /**
     * The log entry payload, represented as a structure that is expressed as a JSON object.
     */
    structPayload?: Record<string, any>;
    /**
     * The log entry payload, represented as a Unicode string (UTF-8).
     */
    textPayload?: string;
    /**
     * The time the event described by the log entry occurred. If omitted, defaults to operation start time.
     */
    timestamp?: string;
    /**
     * Optional. Resource name of the trace associated with the log entry, if any. If this field contains a relative resource name, you can assume the name is relative to `//tracing.googleapis.com`. Example: `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`
     */
    trace?: string;
}
