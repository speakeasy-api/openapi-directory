// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// NumericBucketingOption - Input only. Use this field to specify bucketing option for the histogram search response.
type NumericBucketingOption struct {
	// Required. Two adjacent values form a histogram bucket. Values should be in ascending order. For example, if [5, 10, 15] are provided, four buckets are created: (-inf, 5), 5, 10), [10, 15), [15, inf). At most 20 [buckets_bound is supported.
	BucketBounds []float64 `json:"bucketBounds,omitempty"`
	// Optional. If set to true, the histogram result includes minimum/maximum value of the numeric field.
	RequiresMinMax *bool `json:"requiresMinMax,omitempty"`
}
