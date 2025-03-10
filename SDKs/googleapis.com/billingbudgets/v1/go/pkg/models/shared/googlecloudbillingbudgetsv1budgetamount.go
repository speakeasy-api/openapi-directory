// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleCloudBillingBudgetsV1BudgetAmount - The budgeted amount for each usage period.
type GoogleCloudBillingBudgetsV1BudgetAmount struct {
	// Describes a budget amount targeted to the last Filter.calendar_period spend. At this time, the amount is automatically 100% of the last calendar period's spend; that is, there are no other options yet. LastPeriodAmount cannot be set for a budget configured with a Filter.custom_period.
	LastPeriodAmount map[string]interface{} `json:"lastPeriodAmount,omitempty"`
	// Represents an amount of money with its currency type.
	SpecifiedAmount *GoogleTypeMoney `json:"specifiedAmount,omitempty"`
}
