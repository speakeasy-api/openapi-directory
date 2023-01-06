package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveEuaByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RetrieveEuaByIDRequest struct {
	PathParams RetrieveEuaByIDPathParams
}

type RetrieveEuaByIDResponse struct {
	ContentType      string
	EndUserAgreement *shared.EndUserAgreement
	StatusCode       int64
}
