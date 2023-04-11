import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The error models' error category
 */
export declare enum ErrorModelErrorModelErrorCategoryEnum {
    General = "General",
    NotFound = "NotFound",
    NotAuthorised = "NotAuthorised",
    ValidationFailure = "ValidationFailure"
}
/**
 * The error models' errors
 */
export declare class ErrorModelErrorModelErrors extends SpeakeasyBase {
    error?: string[];
}
export declare class ErrorModelErrorModel extends SpeakeasyBase {
    /**
     * The error models' description
     */
    description?: string;
    /**
     * The error models' error category
     */
    errorCategory?: ErrorModelErrorModelErrorCategoryEnum;
    /**
     * The error models' errors
     */
    errors?: ErrorModelErrorModelErrors;
}
/**
 * Bad Request
 */
export declare class ErrorModel extends SpeakeasyBase {
    errorModel?: ErrorModelErrorModel;
}
