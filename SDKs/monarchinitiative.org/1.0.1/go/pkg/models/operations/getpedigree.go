package operations

import (
	"openapi/pkg/models/shared"
)

type GetPedigreePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPedigreeRequest struct {
	PathParams GetPedigreePathParams
}

type GetPedigreeResponse struct {
	Associations []shared.Association
	ContentType  string
	StatusCode   int64
}
