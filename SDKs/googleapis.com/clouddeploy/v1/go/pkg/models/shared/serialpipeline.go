// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// SerialPipeline - SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.
type SerialPipeline struct {
	// Each stage specifies configuration for a `Target`. The ordering of this list defines the promotion flow.
	Stages []Stage `json:"stages,omitempty"`
}
