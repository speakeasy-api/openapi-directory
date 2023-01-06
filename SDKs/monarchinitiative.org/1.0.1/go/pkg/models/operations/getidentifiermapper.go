package operations

import (
	"openapi/pkg/models/shared"
)

type GetIdentifierMapperPathParams struct {
	Source string `pathParam:"style=simple,explode=false,name=source"`
	Target string `pathParam:"style=simple,explode=false,name=target"`
}

type GetIdentifierMapperRequest struct {
	PathParams GetIdentifierMapperPathParams
}

type GetIdentifierMapperResponse struct {
	Associations []shared.Association
	ContentType  string
	StatusCode   int64
}
