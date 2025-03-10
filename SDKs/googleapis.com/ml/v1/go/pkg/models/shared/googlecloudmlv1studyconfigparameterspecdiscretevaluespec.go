// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec struct {
	// Must be specified if type is `DISCRETE`. A list of feasible points. The list should be in strictly increasing order. For instance, this parameter might have possible settings of 1.5, 2.5, and 4.0. This list should not contain more than 1,000 values.
	Values []float64 `json:"values,omitempty"`
}
