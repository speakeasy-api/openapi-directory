// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// CPUUtilization - Target scaling by CPU usage.
type CPUUtilization struct {
	// Period of time over which CPU utilization is calculated.
	AggregationWindowLength *string `json:"aggregationWindowLength,omitempty"`
	// Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.
	TargetUtilization *float64 `json:"targetUtilization,omitempty"`
}
