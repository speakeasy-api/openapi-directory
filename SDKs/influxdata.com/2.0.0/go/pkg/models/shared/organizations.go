package shared

type Organizations struct {
	Links *Links        `json:"links,omitempty"`
	Orgs  []interface{} `json:"orgs,omitempty"`
}
