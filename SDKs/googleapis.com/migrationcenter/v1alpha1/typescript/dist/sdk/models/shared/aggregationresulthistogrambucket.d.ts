import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A histogram bucket with a lower and upper bound, and a count of items with a field value between those bounds. The lower bound is inclusive and the upper bound is exclusive. Lower bound may be -infinity and upper bound may be infinity.
 */
export declare class AggregationResultHistogramBucket extends SpeakeasyBase {
    /**
     * Count of items in the bucket.
     */
    count?: string;
    /**
     * Lower bound - inclusive.
     */
    lowerBound?: number;
    /**
     * Upper bound - exclusive.
     */
    upperBound?: number;
}
