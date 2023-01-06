package operations

import (
	"openapi/pkg/models/shared"
)

type GetRelationUsagePivotResourceQueryParams struct {
	Evidence     *string `queryParam:"style=form,explode=true,name=evidence"`
	SubjectTaxon *string `queryParam:"style=form,explode=true,name=subject_taxon"`
}

type GetRelationUsagePivotResourceRequest struct {
	QueryParams GetRelationUsagePivotResourceQueryParams
}

type GetRelationUsagePivotResourceResponse struct {
	AssociationResults []shared.AssociationResults
	ContentType        string
	StatusCode         int64
}
