package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssociationsFromPathParams struct {
	Subject string `pathParam:"style=simple,explode=false,name=subject"`
}

type GetAssociationsFromQueryParams struct {
	Evidence                   *string `queryParam:"style=form,explode=true,name=evidence"`
	ExcludeAutomaticAssertions *bool   `queryParam:"style=form,explode=true,name=exclude_automatic_assertions"`
	ObjectTaxon                *string `queryParam:"style=form,explode=true,name=object_taxon"`
	Relation                   *string `queryParam:"style=form,explode=true,name=relation"`
	Rows                       *int64  `queryParam:"style=form,explode=true,name=rows"`
	Start                      *int64  `queryParam:"style=form,explode=true,name=start"`
	UnselectEvidence           *bool   `queryParam:"style=form,explode=true,name=unselect_evidence"`
	UseCompactAssociations     *bool   `queryParam:"style=form,explode=true,name=use_compact_associations"`
}

type GetAssociationsFromRequest struct {
	PathParams  GetAssociationsFromPathParams
	QueryParams GetAssociationsFromQueryParams
}

type GetAssociationsFromResponse struct {
	AssociationResults []shared.AssociationResults
	ContentType        string
	StatusCode         int64
}
