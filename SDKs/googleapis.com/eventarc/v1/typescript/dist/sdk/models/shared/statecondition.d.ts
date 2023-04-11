import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The canonical code of the condition.
 */
export declare enum StateConditionCodeEnum {
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
 * A condition that is part of the trigger state computation.
 */
export declare class StateCondition extends SpeakeasyBase {
    /**
     * The canonical code of the condition.
     */
    code?: StateConditionCodeEnum;
    /**
     * Human-readable message.
     */
    message?: string;
}
