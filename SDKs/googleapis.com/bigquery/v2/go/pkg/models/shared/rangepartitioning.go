// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// RangePartitioningRange - [TrustedTester] [Required] Defines the ranges for range partitioning.
type RangePartitioningRange struct {
	// [TrustedTester] [Required] The end of range partitioning, exclusive.
	End *string `json:"end,omitempty"`
	// [TrustedTester] [Required] The width of each interval.
	Interval *string `json:"interval,omitempty"`
	// [TrustedTester] [Required] The start of range partitioning, inclusive.
	Start *string `json:"start,omitempty"`
}

type RangePartitioning struct {
	// [TrustedTester] [Required] The table is partitioned by this field. The field must be a top-level NULLABLE/REQUIRED field. The only supported type is INTEGER/INT64.
	Field *string `json:"field,omitempty"`
	// [TrustedTester] [Required] Defines the ranges for range partitioning.
	Range *RangePartitioningRange `json:"range,omitempty"`
}
