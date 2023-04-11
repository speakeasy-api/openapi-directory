import { SpeakeasyBase } from "../../../internal/utils";
import { IntegerFacetingOptions } from "./integerfacetingoptions";
import { IntegerOperatorOptions } from "./integeroperatoroptions";
/**
 * Used to specify the ordered ranking for the integer. Can only be used if isRepeatable is false.
 */
export declare enum IntegerPropertyOptionsOrderedRankingEnum {
    NoOrder = "NO_ORDER",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * The options for integer properties.
 */
export declare class IntegerPropertyOptions extends SpeakeasyBase {
    /**
     * Used to specify integer faceting options.
     */
    integerFacetingOptions?: IntegerFacetingOptions;
    /**
     * The maximum value of the property. The minimum and maximum values for the property are used to rank results according to the ordered ranking. Indexing requests with values greater than the maximum are accepted and ranked with the same weight as items indexed with the maximum value.
     */
    maximumValue?: string;
    /**
     * The minimum value of the property. The minimum and maximum values for the property are used to rank results according to the ordered ranking. Indexing requests with values less than the minimum are accepted and ranked with the same weight as items indexed with the minimum value.
     */
    minimumValue?: string;
    /**
     * Used to provide a search operator for integer properties. This is optional. Search operators let users restrict the query to specific fields relevant to the type of item being searched.
     */
    operatorOptions?: IntegerOperatorOptions;
    /**
     * Used to specify the ordered ranking for the integer. Can only be used if isRepeatable is false.
     */
    orderedRanking?: IntegerPropertyOptionsOrderedRankingEnum;
}
