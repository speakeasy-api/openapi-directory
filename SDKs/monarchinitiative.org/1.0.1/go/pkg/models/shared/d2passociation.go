package shared

type D2PAssociation struct {
	EvidenceGraph     *Graph                `json:"evidence_graph,omitempty"`
	EvidenceTypes     []EntityReference     `json:"evidence_types,omitempty"`
	Frequency         *EntityReference      `json:"frequency,omitempty"`
	ID                string                `json:"id"`
	Negated           *bool                 `json:"negated,omitempty"`
	Object            BioObjectCore         `json:"object"`
	ObjectEq          []string              `json:"object_eq,omitempty"`
	ObjectExtensions  []AnnotationExtension `json:"object_extensions,omitempty"`
	Onset             *EntityReference      `json:"onset,omitempty"`
	ProvidedBy        []string              `json:"provided_by,omitempty"`
	Publications      []EntityReference     `json:"publications,omitempty"`
	Qualifiers        []string              `json:"qualifiers,omitempty"`
	Relation          RelationRef           `json:"relation"`
	Slim              []string              `json:"slim,omitempty"`
	Subject           BioObjectCore         `json:"subject"`
	SubjectEq         []string              `json:"subject_eq,omitempty"`
	SubjectExtensions []AnnotationExtension `json:"subject_extensions,omitempty"`
	Type              *string               `json:"type,omitempty"`
}
