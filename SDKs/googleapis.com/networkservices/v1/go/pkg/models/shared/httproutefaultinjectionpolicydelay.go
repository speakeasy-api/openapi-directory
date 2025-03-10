// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// HTTPRouteFaultInjectionPolicyDelay - Specification of how client requests are delayed as part of fault injection before being sent to a destination.
type HTTPRouteFaultInjectionPolicyDelay struct {
	// Specify a fixed delay before forwarding the request.
	FixedDelay *string `json:"fixedDelay,omitempty"`
	// The percentage of traffic on which delay will be injected. The value must be between [0, 100]
	Percentage *int `json:"percentage,omitempty"`
}
