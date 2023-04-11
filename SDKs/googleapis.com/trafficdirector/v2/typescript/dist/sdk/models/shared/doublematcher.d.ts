import { SpeakeasyBase } from "../../../internal/utils";
import { DoubleRange } from "./doublerange";
/**
 * Specifies the way to match a double value.
 */
export declare class DoubleMatcher extends SpeakeasyBase {
    /**
     * If specified, the input double value must be equal to the value specified here.
     */
    exact?: number;
    /**
     * Specifies the double start and end of the range using half-open interval semantics [start, end).
     */
    range?: DoubleRange;
}
