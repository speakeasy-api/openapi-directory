package shared

type AnnotationExtension1 struct {
	Filler        *NamedObject `json:"filler,omitempty"`
	RelationChain []Relation   `json:"relation_chain,omitempty"`
}
