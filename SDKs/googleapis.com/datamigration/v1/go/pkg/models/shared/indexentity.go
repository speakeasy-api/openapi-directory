package shared

// IndexEntity
// Index is not used as an independent entity, it is retrieved as part of a Table entity.
type IndexEntity struct {
	CustomFeatures map[string]interface{} `json:"customFeatures,omitempty"`
	Name           *string                `json:"name,omitempty"`
	TableColumns   []string               `json:"tableColumns,omitempty"`
	Type           *string                `json:"type,omitempty"`
	Unique         *bool                  `json:"unique,omitempty"`
}
