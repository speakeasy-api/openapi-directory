import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The error code.
 */
export declare enum CustomEventErrorCodeEnum {
    Unknown = "UNKNOWN",
    InvalidArgument = "INVALID_ARGUMENT",
    Internal = "INTERNAL",
    PermissionDenied = "PERMISSION_DENIED",
    NotFound = "NOT_FOUND"
}
/**
 * The error code and description for a custom event that failed to insert.
 */
export declare class CustomEventError extends SpeakeasyBase {
    /**
     * The error code.
     */
    code?: CustomEventErrorCodeEnum;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventError".
     */
    kind?: string;
    /**
     * A description of the error.
     */
    message?: string;
}
