import { SpeakeasyBase } from "../../../internal/utils";
import { BucketizedCount } from "./bucketizedcount";
/**
 * Output only. Custom numeric bucketing result.
 */
export declare class NumericBucketingResult extends SpeakeasyBase {
    /**
     * Count within each bucket. Its size is the length of NumericBucketingOption.bucket_bounds plus 1.
     */
    counts?: BucketizedCount[];
    /**
     * Stores the maximum value of the numeric field. Is populated only if [NumericBucketingOption.requires_min_max] is set to true.
     */
    maxValue?: number;
    /**
     * Stores the minimum value of the numeric field. Will be populated only if [NumericBucketingOption.requires_min_max] is set to true.
     */
    minValue?: number;
}
