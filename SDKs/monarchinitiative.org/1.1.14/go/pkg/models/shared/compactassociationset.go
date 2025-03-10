// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type CompactAssociationSet struct {
	// List of O, for a given (S,R) pair, yielding (S,R,O) triples. E.g. list of MPs for (MGI:nnn, has_phenotype)
	Objects []string `json:"objects"`
	// Relationship type connecting subject and object list
	Relation string `json:"relation"`
	// Subject of association (what it is about), e.g. MGI:1201606
	Subject string `json:"subject"`
}
