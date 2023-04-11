import { SpeakeasyBase } from "../../../internal/utils";
import { FilterExpression } from "./filterexpression";
/**
 * Details for the filter of the type ADVANCED.
 */
export declare class FilterAdvancedDetails extends SpeakeasyBase {
    /**
     * Indicates if the filter expressions are case sensitive.
     */
    caseSensitive?: boolean;
    /**
     * Expression to extract from field A.
     */
    extractA?: string;
    /**
     * Expression to extract from field B.
     */
    extractB?: string;
    /**
     * Field A.
     */
    fieldA?: string;
    /**
     * The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
     */
    fieldAIndex?: number;
    /**
     * Indicates if field A is required to match.
     */
    fieldARequired?: boolean;
    /**
     * Field B.
     */
    fieldB?: string;
    /**
     * The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
     */
    fieldBIndex?: number;
    /**
     * Indicates if field B is required to match.
     */
    fieldBRequired?: boolean;
    /**
     * Expression used to construct the output value.
     */
    outputConstructor?: string;
    /**
     * Output field.
     */
    outputToField?: string;
    /**
     * The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
     */
    outputToFieldIndex?: number;
    /**
     * Indicates if the existing value of the output field, if any, should be overridden by the output expression.
     */
    overrideOutputField?: boolean;
}
/**
 * Details for the filter of the type LOWER.
 */
export declare class FilterLowercaseDetails extends SpeakeasyBase {
    /**
     * Field to use in the filter.
     */
    field?: string;
    /**
     * The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
     */
    fieldIndex?: number;
}
/**
 * Parent link for this filter. Points to the account to which this filter belongs.
 */
export declare class FilterParentLink extends SpeakeasyBase {
    /**
     * Link to the account to which this filter belongs.
     */
    href?: string;
    /**
     * Value is "analytics#account".
     */
    type?: string;
}
/**
 * Details for the filter of the type SEARCH_AND_REPLACE.
 */
export declare class FilterSearchAndReplaceDetails extends SpeakeasyBase {
    /**
     * Determines if the filter is case sensitive.
     */
    caseSensitive?: boolean;
    /**
     * Field to use in the filter.
     */
    field?: string;
    /**
     * The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
     */
    fieldIndex?: number;
    /**
     * Term to replace the search term with.
     */
    replaceString?: string;
    /**
     * Term to search.
     */
    searchString?: string;
}
/**
 * Details for the filter of the type UPPER.
 */
export declare class FilterUppercaseDetails extends SpeakeasyBase {
    /**
     * Field to use in the filter.
     */
    field?: string;
    /**
     * The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
     */
    fieldIndex?: number;
}
/**
 * JSON template for an Analytics account filter.
 */
export declare class FilterInput extends SpeakeasyBase {
    /**
     * Account ID to which this filter belongs.
     */
    accountId?: string;
    /**
     * Details for the filter of the type ADVANCED.
     */
    advancedDetails?: FilterAdvancedDetails;
    /**
     * JSON template for an Analytics filter expression.
     */
    excludeDetails?: FilterExpression;
    /**
     * Filter ID.
     */
    id?: string;
    /**
     * JSON template for an Analytics filter expression.
     */
    includeDetails?: FilterExpression;
    /**
     * Details for the filter of the type LOWER.
     */
    lowercaseDetails?: FilterLowercaseDetails;
    /**
     * Name of this filter.
     */
    name?: string;
    /**
     * Parent link for this filter. Points to the account to which this filter belongs.
     */
    parentLink?: FilterParentLink;
    /**
     * Details for the filter of the type SEARCH_AND_REPLACE.
     */
    searchAndReplaceDetails?: FilterSearchAndReplaceDetails;
    /**
     * Type of this filter. Possible values are INCLUDE, EXCLUDE, LOWERCASE, UPPERCASE, SEARCH_AND_REPLACE and ADVANCED.
     */
    type?: string;
    /**
     * Details for the filter of the type UPPER.
     */
    uppercaseDetails?: FilterUppercaseDetails;
}
/**
 * JSON template for an Analytics account filter.
 */
export declare class Filter extends SpeakeasyBase {
    /**
     * Account ID to which this filter belongs.
     */
    accountId?: string;
    /**
     * Details for the filter of the type ADVANCED.
     */
    advancedDetails?: FilterAdvancedDetails;
    /**
     * Time this filter was created.
     */
    created?: Date;
    /**
     * JSON template for an Analytics filter expression.
     */
    excludeDetails?: FilterExpression;
    /**
     * Filter ID.
     */
    id?: string;
    /**
     * JSON template for an Analytics filter expression.
     */
    includeDetails?: FilterExpression;
    /**
     * Resource type for Analytics filter.
     */
    kind?: string;
    /**
     * Details for the filter of the type LOWER.
     */
    lowercaseDetails?: FilterLowercaseDetails;
    /**
     * Name of this filter.
     */
    name?: string;
    /**
     * Parent link for this filter. Points to the account to which this filter belongs.
     */
    parentLink?: FilterParentLink;
    /**
     * Details for the filter of the type SEARCH_AND_REPLACE.
     */
    searchAndReplaceDetails?: FilterSearchAndReplaceDetails;
    /**
     * Link for this filter.
     */
    selfLink?: string;
    /**
     * Type of this filter. Possible values are INCLUDE, EXCLUDE, LOWERCASE, UPPERCASE, SEARCH_AND_REPLACE and ADVANCED.
     */
    type?: string;
    /**
     * Time this filter was last modified.
     */
    updated?: Date;
    /**
     * Details for the filter of the type UPPER.
     */
    uppercaseDetails?: FilterUppercaseDetails;
}
