import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describing buckets with exponentially growing width.
 */
export declare class ExponentialBuckets extends SpeakeasyBase {
    /**
     * The i'th exponential bucket covers the interval [scale * growth_factor^(i-1), scale * growth_factor^i) where i ranges from 1 to num_finite_buckets inclusive. Must be larger than 1.0.
     */
    growthFactor?: number;
    /**
     * The number of finite buckets. With the underflow and overflow buckets, the total number of buckets is `num_finite_buckets` + 2. See comments on `bucket_options` for details.
     */
    numFiniteBuckets?: number;
    /**
     * The i'th exponential bucket covers the interval [scale * growth_factor^(i-1), scale * growth_factor^i) where i ranges from 1 to num_finite_buckets inclusive. Must be > 0.
     */
    scale?: number;
}
