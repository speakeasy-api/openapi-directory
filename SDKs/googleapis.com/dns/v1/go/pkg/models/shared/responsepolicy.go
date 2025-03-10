// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ResponsePolicy - A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks.
type ResponsePolicy struct {
	// User-provided description for this Response Policy.
	Description *string `json:"description,omitempty"`
	// The list of Google Kubernetes Engine clusters to which this response policy is applied.
	GkeClusters []ResponsePolicyGKECluster `json:"gkeClusters,omitempty"`
	// Unique identifier for the resource; defined by the server (output only).
	ID   *string `json:"id,omitempty"`
	Kind *string `json:"kind,omitempty"`
	// User labels.
	Labels map[string]string `json:"labels,omitempty"`
	// List of network names specifying networks to which this policy is applied.
	Networks []ResponsePolicyNetwork `json:"networks,omitempty"`
	// User assigned name for this Response Policy.
	ResponsePolicyName *string `json:"responsePolicyName,omitempty"`
}
