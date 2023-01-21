package shared

type Runs struct {
	Links *Links        `json:"links,omitempty"`
	Runs  []interface{} `json:"runs,omitempty"`
}
