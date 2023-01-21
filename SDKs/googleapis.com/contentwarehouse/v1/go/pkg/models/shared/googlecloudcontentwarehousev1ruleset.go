package shared

// GoogleCloudContentwarehouseV1RuleSet
// Represents a set of rules from a single customer.
type GoogleCloudContentwarehouseV1RuleSet struct {
	Description *string                             `json:"description,omitempty"`
	Name        *string                             `json:"name,omitempty"`
	Rules       []GoogleCloudContentwarehouseV1Rule `json:"rules,omitempty"`
	Source      *string                             `json:"source,omitempty"`
}
