import { SpeakeasyBase } from "../../../internal/utils";
import { PrintServer } from "./printserver";
/**
 * Canonical code for why the update failed to apply.
 */
export declare enum PrintServerFailureInfoErrorCodeEnum {
    Ok = "OK",
    Cancelled = "CANCELLED",
    Unknown = "UNKNOWN",
    InvalidArgument = "INVALID_ARGUMENT",
    DeadlineExceeded = "DEADLINE_EXCEEDED",
    NotFound = "NOT_FOUND",
    AlreadyExists = "ALREADY_EXISTS",
    PermissionDenied = "PERMISSION_DENIED",
    Unauthenticated = "UNAUTHENTICATED",
    ResourceExhausted = "RESOURCE_EXHAUSTED",
    FailedPrecondition = "FAILED_PRECONDITION",
    Aborted = "ABORTED",
    OutOfRange = "OUT_OF_RANGE",
    Unimplemented = "UNIMPLEMENTED",
    Internal = "INTERNAL",
    Unavailable = "UNAVAILABLE",
    DataLoss = "DATA_LOSS"
}
/**
 * Info about failures
 */
export declare class PrintServerFailureInfo extends SpeakeasyBase {
    /**
     * Canonical code for why the update failed to apply.
     */
    errorCode?: PrintServerFailureInfoErrorCodeEnum;
    /**
     * Failure reason message.
     */
    errorMessage?: string;
    /**
     * Configuration for a print server.
     */
    printServer?: PrintServer;
    /**
     * ID of a failed print server.
     */
    printServerId?: string;
}
