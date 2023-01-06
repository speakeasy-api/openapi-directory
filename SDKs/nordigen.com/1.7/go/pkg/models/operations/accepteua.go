package operations

import (
	"openapi/pkg/models/shared"
)

type AcceptEuaPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AcceptEuaRequests struct {
	EnduserAcceptanceDetails  *shared.EnduserAcceptanceDetails `request:"mediaType=application/json"`
	EnduserAcceptanceDetails1 *shared.EnduserAcceptanceDetails `request:"mediaType=application/x-www-form-urlencoded"`
	EnduserAcceptanceDetails2 *shared.EnduserAcceptanceDetails `request:"mediaType=multipart/form-data"`
}

type AcceptEuaRequest struct {
	PathParams AcceptEuaPathParams
	Request    AcceptEuaRequests
}

type AcceptEuaResponse struct {
	ContentType      string
	EndUserAgreement *shared.EndUserAgreement
	StatusCode       int64
}
