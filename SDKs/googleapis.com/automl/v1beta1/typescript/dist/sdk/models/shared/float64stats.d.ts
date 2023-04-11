import { SpeakeasyBase } from "../../../internal/utils";
import { HistogramBucket } from "./histogrambucket";
/**
 * The data statistics of a series of FLOAT64 values.
 */
export declare class Float64Stats extends SpeakeasyBase {
    /**
     * Histogram buckets of the data series. Sorted by the min value of the bucket, ascendingly, and the number of the buckets is dynamically generated. The buckets are non-overlapping and completely cover whole FLOAT64 range with min of first bucket being `"-Infinity"`, and max of the last one being `"Infinity"`.
     */
    histogramBuckets?: HistogramBucket[];
    /**
     * The mean of the series.
     */
    mean?: number;
    /**
     * Ordered from 0 to k k-quantile values of the data series of n values. The value at index i is, approximately, the i*n/k-th smallest value in the series; for i = 0 and i = k these are, respectively, the min and max values.
     */
    quantiles?: number[];
    /**
     * The standard deviation of the series.
     */
    standardDeviation?: number;
}
