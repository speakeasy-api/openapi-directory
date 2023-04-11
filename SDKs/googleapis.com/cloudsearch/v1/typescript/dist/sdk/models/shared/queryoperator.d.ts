import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the operator.
 */
export declare enum QueryOperatorTypeEnum {
    Unknown = "UNKNOWN",
    Integer = "INTEGER",
    Double = "DOUBLE",
    Timestamp = "TIMESTAMP",
    Boolean = "BOOLEAN",
    Enum = "ENUM",
    Date = "DATE",
    Text = "TEXT",
    Html = "HTML"
}
/**
 * The definition of a operator that can be used in a Search/Suggest request.
 */
export declare class QueryOperator extends SpeakeasyBase {
    /**
     * Display name of the operator
     */
    displayName?: string;
    /**
     * Potential list of values for the opeatror field. This field is only filled when we can safely enumerate all the possible values of this operator.
     */
    enumValues?: string[];
    /**
     * Indicates the operator name that can be used to isolate the property using the greater-than operator.
     */
    greaterThanOperatorName?: string;
    /**
     * Can this operator be used to get facets.
     */
    isFacetable?: boolean;
    /**
     * Indicates if multiple values can be set for this property.
     */
    isRepeatable?: boolean;
    /**
     * Will the property associated with this facet be returned as part of search results.
     */
    isReturnable?: boolean;
    /**
     * Can this operator be used to sort results.
     */
    isSortable?: boolean;
    /**
     * Can get suggestions for this field.
     */
    isSuggestable?: boolean;
    /**
     * Indicates the operator name that can be used to isolate the property using the less-than operator.
     */
    lessThanOperatorName?: string;
    /**
     * The name of the object corresponding to the operator. This field is only filled for schema-specific operators, and is unset for common operators.
     */
    objectType?: string;
    /**
     * The name of the operator.
     */
    operatorName?: string;
    /**
     * The type of the operator.
     */
    type?: QueryOperatorTypeEnum;
}
