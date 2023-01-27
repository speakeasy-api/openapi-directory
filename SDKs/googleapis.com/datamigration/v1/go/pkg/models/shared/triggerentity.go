package shared

// TriggerEntity
// Trigger is not used as an independent entity, it is retrieved as part of a Table entity.
type TriggerEntity struct {
	CustomFeatures   map[string]interface{} `json:"customFeatures,omitempty"`
	Name             *string                `json:"name,omitempty"`
	SQLCode          *string                `json:"sqlCode,omitempty"`
	TriggerType      *string                `json:"triggerType,omitempty"`
	TriggeringEvents []string               `json:"triggeringEvents,omitempty"`
}
