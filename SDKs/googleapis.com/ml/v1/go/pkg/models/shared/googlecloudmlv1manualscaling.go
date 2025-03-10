// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleCloudMlV1ManualScaling - Options for manually scaling a model.
type GoogleCloudMlV1ManualScaling struct {
	// The number of nodes to allocate for this model. These nodes are always up, starting from the time the model is deployed, so the cost of operating this model will be proportional to `nodes` * number of hours since last billing cycle plus the cost for each prediction performed.
	Nodes *int `json:"nodes,omitempty"`
}
