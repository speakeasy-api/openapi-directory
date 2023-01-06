package shared

type ContactRequest struct {
	Attributes map[string]interface{} `json:"attributes,omitempty"`
	Tags       []Tag                  `json:"tags,omitempty"`
}
