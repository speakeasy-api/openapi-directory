import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
/**
 * The operator for combining multiple filters.
 */
export declare enum CompositeFilterOpEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    And = "AND",
    Or = "OR"
}
/**
 * A filter that merges multiple other filters using the given operator.
 */
export declare class CompositeFilter extends SpeakeasyBase {
    /**
     * The list of filters to combine. Requires: * At least one filter is present.
     */
    filters?: Filter[];
    /**
     * The operator for combining multiple filters.
     */
    op?: CompositeFilterOpEnum;
}
