// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest - Request message for listing the group priority ordering of an app.
type GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest struct {
	// The namespace of the policy type for the request.
	PolicyNamespace *string `json:"policyNamespace,omitempty"`
	// The schema name of the policy for the request.
	PolicySchema *string `json:"policySchema,omitempty"`
	// The key used to identify the target on which the policy will be applied.
	PolicyTargetKey *GoogleChromePolicyVersionsV1PolicyTargetKey `json:"policyTargetKey,omitempty"`
}
