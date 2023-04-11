import { SpeakeasyBase } from "../../../internal/utils";
import { Exemplar } from "./exemplar";
import { ExplicitBuckets } from "./explicitbuckets";
import { ExponentialBuckets } from "./exponentialbuckets";
import { LinearBuckets } from "./linearbuckets";
/**
 * Distribution represents a frequency distribution of double-valued sample points. It contains the size of the population of sample points plus additional optional information: * the arithmetic mean of the samples * the minimum and maximum of the samples * the sum-squared-deviation of the samples, used to compute variance * a histogram of the values of the sample points
 */
export declare class Distribution extends SpeakeasyBase {
    /**
     * The number of samples in each histogram bucket. `bucket_counts` are optional. If present, they must sum to the `count` value. The buckets are defined below in `bucket_option`. There are N buckets. `bucket_counts[0]` is the number of samples in the underflow bucket. `bucket_counts[1]` to `bucket_counts[N-1]` are the numbers of samples in each of the finite buckets. And `bucket_counts[N] is the number of samples in the overflow bucket. See the comments of `bucket_option` below for more details. Any suffix of trailing zeros may be omitted.
     */
    bucketCounts?: string[];
    /**
     * The total number of samples in the distribution. Must be >= 0.
     */
    count?: string;
    /**
     * Example points. Must be in increasing order of `value` field.
     */
    exemplars?: Exemplar[];
    /**
     * Describing buckets with arbitrary user-provided width.
     */
    explicitBuckets?: ExplicitBuckets;
    /**
     * Describing buckets with exponentially growing width.
     */
    exponentialBuckets?: ExponentialBuckets;
    /**
     * Describing buckets with constant width.
     */
    linearBuckets?: LinearBuckets;
    /**
     * The maximum of the population of values. Ignored if `count` is zero.
     */
    maximum?: number;
    /**
     * The arithmetic mean of the samples in the distribution. If `count` is zero then this field must be zero.
     */
    mean?: number;
    /**
     * The minimum of the population of values. Ignored if `count` is zero.
     */
    minimum?: number;
    /**
     * The sum of squared deviations from the mean: Sum[i=1..count]((x_i - mean)^2) where each x_i is a sample values. If `count` is zero then this field must be zero, otherwise validation of the request fails.
     */
    sumOfSquaredDeviation?: number;
}
