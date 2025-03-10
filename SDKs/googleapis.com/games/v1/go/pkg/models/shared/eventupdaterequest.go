// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// EventUpdateRequest - An event period update resource.
type EventUpdateRequest struct {
	// The ID of the event being modified in this update.
	DefinitionID *string `json:"definitionId,omitempty"`
	// Uniquely identifies the type of this resource. Value is always the fixed string `games#eventUpdateRequest`.
	Kind *string `json:"kind,omitempty"`
	// The number of times this event occurred in this time period.
	UpdateCount *string `json:"updateCount,omitempty"`
}
