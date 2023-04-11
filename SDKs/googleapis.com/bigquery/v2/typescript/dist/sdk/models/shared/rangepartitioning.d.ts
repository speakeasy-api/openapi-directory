import { SpeakeasyBase } from "../../../internal/utils";
/**
 * [TrustedTester] [Required] Defines the ranges for range partitioning.
 */
export declare class RangePartitioningRange extends SpeakeasyBase {
    /**
     * [TrustedTester] [Required] The end of range partitioning, exclusive.
     */
    end?: string;
    /**
     * [TrustedTester] [Required] The width of each interval.
     */
    interval?: string;
    /**
     * [TrustedTester] [Required] The start of range partitioning, inclusive.
     */
    start?: string;
}
export declare class RangePartitioning extends SpeakeasyBase {
    /**
     * [TrustedTester] [Required] The table is partitioned by this field. The field must be a top-level NULLABLE/REQUIRED field. The only supported type is INTEGER/INT64.
     */
    field?: string;
    /**
     * [TrustedTester] [Required] Defines the ranges for range partitioning.
     */
    range?: RangePartitioningRange;
}
