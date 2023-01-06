package operations

import (
	"openapi/pkg/models/shared"
)

type GetEntitySetHomologsQueryParams struct {
	Subject []string `queryParam:"style=form,explode=true,name=subject"`
}

type GetEntitySetHomologsRequest struct {
	QueryParams GetEntitySetHomologsQueryParams
}

type GetEntitySetHomologsResponse struct {
	AssociationResults []shared.AssociationResults
	ContentType        string
	StatusCode         int64
}
