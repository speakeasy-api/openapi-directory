import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
/**
 * The logic operator of the sub filter.
 */
export declare enum CompositeFilterLogicOperatorEnum {
    And = "AND",
    Or = "OR",
    Not = "NOT"
}
export declare class CompositeFilter extends SpeakeasyBase {
    /**
     * The logic operator of the sub filter.
     */
    logicOperator?: CompositeFilterLogicOperatorEnum;
    /**
     * Sub filters.
     */
    subFilters?: Filter[];
}
