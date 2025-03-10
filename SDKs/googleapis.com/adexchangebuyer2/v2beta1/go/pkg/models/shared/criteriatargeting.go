// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// CriteriaTargeting - Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs.
type CriteriaTargeting struct {
	// A list of numeric IDs to be excluded.
	ExcludedCriteriaIds []string `json:"excludedCriteriaIds,omitempty"`
	// A list of numeric IDs to be included.
	TargetedCriteriaIds []string `json:"targetedCriteriaIds,omitempty"`
}
