package shared

type Buckets struct {
	Buckets []interface{} `json:"buckets,omitempty"`
	Links   *Links        `json:"links,omitempty"`
}
