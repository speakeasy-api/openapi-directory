package shared

type AnnotationExtension3 struct {
	Filler        *NamedObject2            `json:"filler,omitempty"`
	RelationChain []map[string]interface{} `json:"relation_chain,omitempty"`
}
