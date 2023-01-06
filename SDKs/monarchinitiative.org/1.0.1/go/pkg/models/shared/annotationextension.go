package shared

type AnnotationExtension struct {
	Filler        *NamedObject             `json:"filler,omitempty"`
	RelationChain []map[string]interface{} `json:"relation_chain,omitempty"`
}
