import { SpeakeasyBase } from "../../../internal/utils";
import { FieldViolation } from "./fieldviolation";
/**
 * Error code indicating the nature of the error.
 */
export declare enum ProcessingErrorCodeEnum {
    ProcessingErrorCodeUnspecified = "PROCESSING_ERROR_CODE_UNSPECIFIED",
    MalformedRequest = "MALFORMED_REQUEST",
    UnsupportedContentFormat = "UNSUPPORTED_CONTENT_FORMAT",
    IndirectBrokenAcl = "INDIRECT_BROKEN_ACL",
    AclCycle = "ACL_CYCLE"
}
export declare class ProcessingError extends SpeakeasyBase {
    /**
     * Error code indicating the nature of the error.
     */
    code?: ProcessingErrorCodeEnum;
    /**
     * The description of the error.
     */
    errorMessage?: string;
    /**
     * In case the item fields are invalid, this field contains the details about the validation errors.
     */
    fieldViolations?: FieldViolation[];
}
