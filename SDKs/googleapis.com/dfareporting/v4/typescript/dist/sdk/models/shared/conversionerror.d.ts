import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The error code.
 */
export declare enum ConversionErrorCodeEnum {
    InvalidArgument = "INVALID_ARGUMENT",
    Internal = "INTERNAL",
    PermissionDenied = "PERMISSION_DENIED",
    NotFound = "NOT_FOUND"
}
/**
 * The error code and description for a conversion that failed to insert or update.
 */
export declare class ConversionError extends SpeakeasyBase {
    /**
     * The error code.
     */
    code?: ConversionErrorCodeEnum;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionError".
     */
    kind?: string;
    /**
     * A description of the error.
     */
    message?: string;
}
