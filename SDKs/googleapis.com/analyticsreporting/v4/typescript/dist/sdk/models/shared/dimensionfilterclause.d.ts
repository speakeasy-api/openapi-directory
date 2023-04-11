import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionFilter } from "./dimensionfilter";
/**
 * The operator for combining multiple dimension filters. If unspecified, it is treated as an `OR`.
 */
export declare enum DimensionFilterClauseOperatorEnum {
    OperatorUnspecified = "OPERATOR_UNSPECIFIED",
    Or = "OR",
    And = "AND"
}
/**
 * A group of dimension filters. Set the operator value to specify how the filters are logically combined.
 */
export declare class DimensionFilterClause extends SpeakeasyBase {
    /**
     * The repeated set of filters. They are logically combined based on the operator specified.
     */
    filters?: DimensionFilter[];
    /**
     * The operator for combining multiple dimension filters. If unspecified, it is treated as an `OR`.
     */
    operator?: DimensionFilterClauseOperatorEnum;
}
