import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationResultHistogramBucket } from "./aggregationresulthistogrambucket";
/**
 * The result of a bucketed histogram aggregation.
 */
export declare class AggregationResultHistogram extends SpeakeasyBase {
    /**
     * Buckets in the histogram. There will be `n+1` buckets matching `n` lower bounds in the request. The first bucket will be from -infinity to the first bound. Subsequent buckets will be between one bound and the next. The final bucket will be from the final bound to infinity.
     */
    buckets?: AggregationResultHistogramBucket[];
}
