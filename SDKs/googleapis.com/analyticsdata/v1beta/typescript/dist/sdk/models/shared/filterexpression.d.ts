import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
import { FilterExpressionList } from "./filterexpressionlist";
/**
 * To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics.
 */
export declare class FilterExpression extends SpeakeasyBase {
    /**
     * A list of filter expressions.
     */
    andGroup?: FilterExpressionList;
    /**
     * An expression to filter dimension or metric values.
     */
    filter?: Filter;
    /**
     * To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics.
     */
    notExpression?: FilterExpression;
    /**
     * A list of filter expressions.
     */
    orGroup?: FilterExpressionList;
}
