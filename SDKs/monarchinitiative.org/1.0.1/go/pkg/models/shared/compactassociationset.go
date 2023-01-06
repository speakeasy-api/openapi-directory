package shared

type CompactAssociationSet struct {
	Objects  []string `json:"objects"`
	Relation string   `json:"relation"`
	Subject  string   `json:"subject"`
}
