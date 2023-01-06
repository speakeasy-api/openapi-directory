package operations

import (
	"openapi/pkg/models/shared"
)

type GetRelationUsageBetweenResourcePathParams struct {
	ObjectCategory  string `pathParam:"style=simple,explode=false,name=object_category"`
	SubjectCategory string `pathParam:"style=simple,explode=false,name=subject_category"`
}

type GetRelationUsageBetweenResourceQueryParams struct {
	Evidence     *string `queryParam:"style=form,explode=true,name=evidence"`
	SubjectTaxon *string `queryParam:"style=form,explode=true,name=subject_taxon"`
}

type GetRelationUsageBetweenResourceRequest struct {
	PathParams  GetRelationUsageBetweenResourcePathParams
	QueryParams GetRelationUsageBetweenResourceQueryParams
}

type GetRelationUsageBetweenResourceResponse struct {
	AssociationResults []shared.AssociationResults
	ContentType        string
	StatusCode         int64
}
