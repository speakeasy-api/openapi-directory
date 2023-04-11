import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Customize how deployment manager will validate the resource against schema errors.
 */
export declare enum ValidationOptionsSchemaValidationEnum {
    Unknown = "UNKNOWN",
    Ignore = "IGNORE",
    IgnoreWithWarnings = "IGNORE_WITH_WARNINGS",
    Fail = "FAIL"
}
/**
 * Specify what to do with extra properties when executing a request.
 */
export declare enum ValidationOptionsUndeclaredPropertiesEnum {
    Unknown = "UNKNOWN",
    Include = "INCLUDE",
    Ignore = "IGNORE",
    IncludeWithWarnings = "INCLUDE_WITH_WARNINGS",
    IgnoreWithWarnings = "IGNORE_WITH_WARNINGS",
    Fail = "FAIL"
}
/**
 * Options for how to validate and process properties on a resource.
 */
export declare class ValidationOptions extends SpeakeasyBase {
    /**
     * Customize how deployment manager will validate the resource against schema errors.
     */
    schemaValidation?: ValidationOptionsSchemaValidationEnum;
    /**
     * Specify what to do with extra properties when executing a request.
     */
    undeclaredProperties?: ValidationOptionsUndeclaredPropertiesEnum;
}
