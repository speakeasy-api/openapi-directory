import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describing buckets with constant width.
 */
export declare class LinearBuckets extends SpeakeasyBase {
    /**
     * The number of finite buckets. With the underflow and overflow buckets, the total number of buckets is `num_finite_buckets` + 2. See comments on `bucket_options` for details.
     */
    numFiniteBuckets?: number;
    /**
     * The i'th linear bucket covers the interval [offset + (i-1) * width, offset + i * width) where i ranges from 1 to num_finite_buckets, inclusive.
     */
    offset?: number;
    /**
     * The i'th linear bucket covers the interval [offset + (i-1) * width, offset + i * width) where i ranges from 1 to num_finite_buckets, inclusive. Must be strictly positive.
     */
    width?: number;
}
