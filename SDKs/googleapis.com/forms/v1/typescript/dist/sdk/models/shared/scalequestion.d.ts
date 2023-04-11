import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A scale question. The user has a range of numeric values to choose from.
 */
export declare class ScaleQuestion extends SpeakeasyBase {
    /**
     * Required. The highest possible value for the scale.
     */
    high?: number;
    /**
     * The label to display describing the highest point on the scale.
     */
    highLabel?: string;
    /**
     * Required. The lowest possible value for the scale.
     */
    low?: number;
    /**
     * The label to display describing the lowest point on the scale.
     */
    lowLabel?: string;
}
