package operations

import (
	"openapi/pkg/models/shared"
)

type GetCasePhenotypeAssociationsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetCasePhenotypeAssociationsQueryParams struct {
	Direct                     *bool    `queryParam:"style=form,explode=true,name=direct"`
	Evidence                   *string  `queryParam:"style=form,explode=true,name=evidence"`
	ExcludeAutomaticAssertions *bool    `queryParam:"style=form,explode=true,name=exclude_automatic_assertions"`
	Facet                      *bool    `queryParam:"style=form,explode=true,name=facet"`
	FacetFields                []string `queryParam:"style=form,explode=true,name=facet_fields"`
	FetchObjects               *bool    `queryParam:"style=form,explode=true,name=fetch_objects"`
	Rows                       *int64   `queryParam:"style=form,explode=true,name=rows"`
	Slim                       []string `queryParam:"style=form,explode=true,name=slim"`
	Start                      *int64   `queryParam:"style=form,explode=true,name=start"`
	UnselectEvidence           *bool    `queryParam:"style=form,explode=true,name=unselect_evidence"`
	UseCompactAssociations     *bool    `queryParam:"style=form,explode=true,name=use_compact_associations"`
}

type GetCasePhenotypeAssociationsRequest struct {
	PathParams  GetCasePhenotypeAssociationsPathParams
	QueryParams GetCasePhenotypeAssociationsQueryParams
}

type GetCasePhenotypeAssociationsResponse struct {
	AssociationResults *shared.AssociationResults
	ContentType        string
	StatusCode         int64
}
