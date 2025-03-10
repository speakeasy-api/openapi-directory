// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetGenericObjectPathParams struct {
	// id, e.g. NCBIGene:84570
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetGenericObjectQueryParams struct {
	// Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
	Direct *bool `queryParam:"style=form,explode=true,name=direct"`
	// Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
	Evidence *string `queryParam:"style=form,explode=true,name=evidence"`
	// If true, excludes associations that involve IEAs (ECO:0000501)
	ExcludeAutomaticAssertions *bool `queryParam:"style=form,explode=true,name=exclude_automatic_assertions"`
	// Enable faceting
	Facet *bool `queryParam:"style=form,explode=true,name=facet"`
	// Fields to facet on
	FacetFields []string `queryParam:"style=form,explode=true,name=facet_fields"`
	// If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
	FetchObjects *bool `queryParam:"style=form,explode=true,name=fetch_objects"`
	// number of rows
	Rows *int64 `queryParam:"style=form,explode=true,name=rows"`
	// Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
	Slim []string `queryParam:"style=form,explode=true,name=slim"`
	// beginning row
	Start *int64 `queryParam:"style=form,explode=true,name=start"`
	// If true, excludes evidence objects in response
	UnselectEvidence *bool `queryParam:"style=form,explode=true,name=unselect_evidence"`
	// If true, returns results in compact associations format
	UseCompactAssociations *bool `queryParam:"style=form,explode=true,name=use_compact_associations"`
}

type GetGenericObjectRequest struct {
	PathParams  GetGenericObjectPathParams
	QueryParams GetGenericObjectQueryParams
}

type GetGenericObjectResponse struct {
	// Success
	BioObject   *shared.BioObject
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
