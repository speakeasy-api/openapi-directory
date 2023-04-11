import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Input only. Use this field to specify bucketing option for the histogram search response.
 */
export declare class NumericBucketingOption extends SpeakeasyBase {
    /**
     * Required. Two adjacent values form a histogram bucket. Values should be in ascending order. For example, if [5, 10, 15] are provided, four buckets are created: (-inf, 5), 5, 10), [10, 15), [15, inf). At most 20 [buckets_bound is supported.
     */
    bucketBounds?: number[];
    /**
     * Optional. If set to true, the histogram result includes minimum/maximum value of the numeric field.
     */
    requiresMinMax?: boolean;
}
