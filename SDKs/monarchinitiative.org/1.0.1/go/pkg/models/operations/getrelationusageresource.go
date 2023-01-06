package operations

import (
	"openapi/pkg/models/shared"
)

type GetRelationUsageResourceQueryParams struct {
	Evidence     *string `queryParam:"style=form,explode=true,name=evidence"`
	SubjectTaxon *string `queryParam:"style=form,explode=true,name=subject_taxon"`
}

type GetRelationUsageResourceRequest struct {
	QueryParams GetRelationUsageResourceQueryParams
}

type GetRelationUsageResourceResponse struct {
	AssociationResults []shared.AssociationResults
	ContentType        string
	StatusCode         int64
}
