// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type D2PAssociation struct {
	// An indirect association is a join between two or more direct assocations, e.g. gene to disease via ortholog. We record the full set of associations as a graph object
	EvidenceGraph *Graph `json:"evidence_graph,omitempty"`
	// Evidence types (ECO classes)
	EvidenceTypes []EntityReference `json:"evidence_types,omitempty"`
	// Frequency of phenotype in patients with disease
	Frequency *EntityReference `json:"frequency,omitempty"`
	// Association/annotation unique ID
	ID string `json:"id"`
	// True if association is negated
	Negated *bool `json:"negated,omitempty"`
	// Object (sensu RDF), aka target, e.g. HP:0000448, MP:0002109, DOID:14330
	Object BioObjectCore `json:"object"`
	// Equivalent identifiers to object node
	ObjectEq         []string              `json:"object_eq,omitempty"`
	ObjectExtensions []AnnotationExtension `json:"object_extensions,omitempty"`
	// Onset of phenotype in disease process
	Onset *EntityReference `json:"onset,omitempty"`
	// Provider of association, e.g. Orphanet, ClinVar
	ProvidedBy []string `json:"provided_by,omitempty"`
	// Publications supporting association, extracted from evidence graph
	Publications []EntityReference `json:"publications,omitempty"`
	// Qualifier on the association
	Qualifiers []string `json:"qualifiers,omitempty"`
	// Relationship type connecting subject and object
	Relation RelationRef `json:"relation"`
	// Objects mapped to a slim
	Slim []string `json:"slim,omitempty"`
	// Subject of association (what it is about), e.g. ClinVar:nnn, MGI:1201606
	Subject BioObjectCore `json:"subject"`
	// Equivalent identifiers to subject node
	SubjectEq         []string              `json:"subject_eq,omitempty"`
	SubjectExtensions []AnnotationExtension `json:"subject_extensions,omitempty"`
	// Type of association, e.g. gene-phenotype
	Type *string `json:"type,omitempty"`
}
