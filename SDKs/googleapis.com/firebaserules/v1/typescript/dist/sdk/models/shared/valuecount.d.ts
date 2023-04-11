import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Tuple for how many times an Expression was evaluated to a particular ExpressionValue.
 */
export declare class ValueCount extends SpeakeasyBase {
    /**
     * The amount of times that expression returned.
     */
    count?: number;
    /**
     * The return value of the expression
     */
    value?: any;
}
