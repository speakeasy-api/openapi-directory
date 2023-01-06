package operations

import (
	"openapi/pkg/models/shared"
)

type GetRelationUsagePivotLabelResourceQueryParams struct {
	Evidence     *string `queryParam:"style=form,explode=true,name=evidence"`
	SubjectTaxon *string `queryParam:"style=form,explode=true,name=subject_taxon"`
}

type GetRelationUsagePivotLabelResourceRequest struct {
	QueryParams GetRelationUsagePivotLabelResourceQueryParams
}

type GetRelationUsagePivotLabelResourceResponse struct {
	AssociationResults []shared.AssociationResults
	ContentType        string
	StatusCode         int64
}
