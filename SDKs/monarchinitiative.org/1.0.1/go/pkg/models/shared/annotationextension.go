package shared

type AnnotationExtension struct {
	Filler        *NamedObject `json:"filler,omitempty"`
	RelationChain []Relation   `json:"relation_chain,omitempty"`
}
