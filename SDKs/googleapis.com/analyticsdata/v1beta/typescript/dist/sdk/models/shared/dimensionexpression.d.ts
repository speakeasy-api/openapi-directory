import { SpeakeasyBase } from "../../../internal/utils";
import { CaseExpression } from "./caseexpression";
import { ConcatenateExpression } from "./concatenateexpression";
/**
 * Used to express a dimension which is the result of a formula of multiple dimensions. Example usages: 1) lower_case(dimension) 2) concatenate(dimension1, symbol, dimension2).
 */
export declare class DimensionExpression extends SpeakeasyBase {
    /**
     * Used to combine dimension values to a single dimension.
     */
    concatenate?: ConcatenateExpression;
    /**
     * Used to convert a dimension value to a single case.
     */
    lowerCase?: CaseExpression;
    /**
     * Used to convert a dimension value to a single case.
     */
    upperCase?: CaseExpression;
}
