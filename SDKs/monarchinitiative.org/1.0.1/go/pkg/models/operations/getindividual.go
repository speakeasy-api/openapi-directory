package operations

import (
	"openapi/pkg/models/shared"
)

type GetIndividualPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetIndividualRequest struct {
	PathParams GetIndividualPathParams
}

type GetIndividualResponse struct {
	Associations []shared.Association
	ContentType  string
	StatusCode   int64
}
