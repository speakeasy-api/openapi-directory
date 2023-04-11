import { SpeakeasyBase } from "../../../internal/utils";
import { Printer } from "./printer";
/**
 * Canonical code for why the update failed to apply.
 */
export declare enum FailureInfoErrorCodeEnum {
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
export declare class FailureInfo extends SpeakeasyBase {
    /**
     * Canonical code for why the update failed to apply.
     */
    errorCode?: FailureInfoErrorCodeEnum;
    /**
     * Failure reason message.
     */
    errorMessage?: string;
    /**
     * Printer configuration.
     */
    printer?: Printer;
    /**
     * Id of a failed printer.
     */
    printerId?: string;
}
