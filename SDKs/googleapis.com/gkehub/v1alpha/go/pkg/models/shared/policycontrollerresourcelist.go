// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// PolicyControllerResourceList - ResourceList contains container resource requirements.
type PolicyControllerResourceList struct {
	// CPU requirement expressed in Kubernetes resource units.
	CPU *string `json:"cpu,omitempty"`
	// Memory requirement expressed in Kubernetes resource units.
	Memory *string `json:"memory,omitempty"`
}
