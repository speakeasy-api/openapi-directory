package shared

type AnnotationExtension2 struct {
	Filler        *NamedObject1            `json:"filler,omitempty"`
	RelationChain []map[string]interface{} `json:"relation_chain,omitempty"`
}
