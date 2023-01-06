package shared

// ResourceResourceLinks
// A Resource Links object
type ResourceResourceLinks struct {
	Self *interface{} `json:"self,omitempty"`
}

// Resource
// Resource objects appear in a JSON API document to represent resources.
type Resource struct {
	Attributes    map[string]interface{} `json:"attributes,omitempty"`
	ID            string                 `json:"id"`
	Links         *ResourceResourceLinks `json:"links,omitempty"`
	Meta          map[string]interface{} `json:"meta,omitempty"`
	Relationships map[string]interface{} `json:"relationships,omitempty"`
	Type          string                 `json:"type"`
}
