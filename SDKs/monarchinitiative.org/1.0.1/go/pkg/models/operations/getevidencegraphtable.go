package operations

import (
	"openapi/pkg/models/shared"
)

type GetEvidenceGraphTablePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetEvidenceGraphTableQueryParams struct {
	IsPublication *bool `queryParam:"style=form,explode=true,name=is_publication"`
}

type GetEvidenceGraphTableRequest struct {
	PathParams  GetEvidenceGraphTablePathParams
	QueryParams GetEvidenceGraphTableQueryParams
}

type GetEvidenceGraphTableResponse struct {
	AssociationResults []shared.AssociationResults
	ContentType        string
	StatusCode         int64
}
