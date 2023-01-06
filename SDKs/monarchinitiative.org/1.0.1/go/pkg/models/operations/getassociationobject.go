package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssociationObjectPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetAssociationObjectRequest struct {
	PathParams GetAssociationObjectPathParams
}

type GetAssociationObjectResponse struct {
	AssociationResults []shared.AssociationResults
	ContentType        string
	StatusCode         int64
}
