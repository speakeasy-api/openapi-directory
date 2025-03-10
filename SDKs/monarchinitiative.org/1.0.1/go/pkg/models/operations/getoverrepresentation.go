// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type GetOverRepresentationQueryParams struct {
	// Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests
	Background []string `queryParam:"style=form,explode=true,name=background"`
	// Exclude results with p-value greater than this
	MaxPValue *string `queryParam:"style=form,explode=true,name=max_p_value"`
	// E.g. phenotype, function
	ObjectCategory *string `queryParam:"style=form,explode=true,name=object_category"`
	// ontology id. Must be obo id. Examples: go, mp, hp, uberon (optional: will be inferred if left blank)
	Ontology *string `queryParam:"style=form,explode=true,name=ontology"`
	// Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
	Subject []string `queryParam:"style=form,explode=true,name=subject"`
	// Default: gene. Other types may be used e.g. disease but statistics may not make sense
	SubjectCategory *string `queryParam:"style=form,explode=true,name=subject_category"`
	// must be NCBITaxon CURIE. Example: NCBITaxon:9606
	Taxon *string `queryParam:"style=form,explode=true,name=taxon"`
}

type GetOverRepresentationRequest struct {
	QueryParams GetOverRepresentationQueryParams
}

type GetOverRepresentationResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
