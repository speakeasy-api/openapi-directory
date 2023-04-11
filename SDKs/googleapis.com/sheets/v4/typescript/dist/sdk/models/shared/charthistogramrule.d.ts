import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Allows you to organize numeric values in a source data column into buckets of constant size.
 */
export declare class ChartHistogramRule extends SpeakeasyBase {
    /**
     * The size of the buckets that are created. Must be positive.
     */
    intervalSize?: number;
    /**
     * The maximum value at which items are placed into buckets. Values greater than the maximum are grouped into a single bucket. If omitted, it is determined by the maximum item value.
     */
    maxValue?: number;
    /**
     * The minimum value at which items are placed into buckets. Values that are less than the minimum are grouped into a single bucket. If omitted, it is determined by the minimum item value.
     */
    minValue?: number;
}
