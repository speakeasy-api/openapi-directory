package shared

type Authorizations struct {
	Authorizations []Authorization `json:"authorizations,omitempty"`
	Links          *Links          `json:"links,omitempty"`
}
