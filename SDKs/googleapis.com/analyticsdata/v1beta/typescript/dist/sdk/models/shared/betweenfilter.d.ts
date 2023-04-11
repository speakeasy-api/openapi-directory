import { SpeakeasyBase } from "../../../internal/utils";
import { NumericValue } from "./numericvalue";
/**
 * To express that the result needs to be between two numbers (inclusive).
 */
export declare class BetweenFilter extends SpeakeasyBase {
    /**
     * To represent a number.
     */
    fromValue?: NumericValue;
    /**
     * To represent a number.
     */
    toValue?: NumericValue;
}
