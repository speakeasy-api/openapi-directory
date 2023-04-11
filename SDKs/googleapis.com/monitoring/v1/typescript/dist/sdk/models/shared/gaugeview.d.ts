import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A gauge chart shows where the current value sits within a pre-defined range. The upper and lower bounds should define the possible range of values for the scorecard's query (inclusive).
 */
export declare class GaugeView extends SpeakeasyBase {
    /**
     * The lower bound for this gauge chart. The value of the chart should always be greater than or equal to this.
     */
    lowerBound?: number;
    /**
     * The upper bound for this gauge chart. The value of the chart should always be less than or equal to this.
     */
    upperBound?: number;
}
