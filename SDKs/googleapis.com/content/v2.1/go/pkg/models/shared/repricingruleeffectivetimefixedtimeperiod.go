// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// RepricingRuleEffectiveTimeFixedTimePeriod - Definition of a fixed time period.
type RepricingRuleEffectiveTimeFixedTimePeriod struct {
	// The end time (exclusive) of the period. It can only be hour granularity.
	EndTime *string `json:"endTime,omitempty"`
	// The start time (inclusive) of the period. It can only be hour granularity.
	StartTime *string `json:"startTime,omitempty"`
}
