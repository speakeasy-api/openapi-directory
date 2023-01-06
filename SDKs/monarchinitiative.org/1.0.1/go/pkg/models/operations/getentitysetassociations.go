package operations

import (
	"openapi/pkg/models/shared"
)

type GetEntitySetAssociationsQueryParams struct {
	Background     []string `queryParam:"style=form,explode=true,name=background"`
	ObjectCategory *string  `queryParam:"style=form,explode=true,name=object_category"`
	ObjectSlim     *string  `queryParam:"style=form,explode=true,name=object_slim"`
	Subject        []string `queryParam:"style=form,explode=true,name=subject"`
}

type GetEntitySetAssociationsRequest struct {
	QueryParams GetEntitySetAssociationsQueryParams
}

type GetEntitySetAssociationsResponse struct {
	AssociationResults []shared.AssociationResults
	ContentType        string
	StatusCode         int64
}
