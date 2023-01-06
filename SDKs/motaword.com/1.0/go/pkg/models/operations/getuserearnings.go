package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserEarningsPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type GetUserEarningsSecurity struct {
	MwoAuth shared.SchemeMwoAuth `security:"scheme,type=oauth2"`
}

type GetUserEarningsRequest struct {
	PathParams GetUserEarningsPathParams
	Security   GetUserEarningsSecurity
}

type GetUserEarningsResponse struct {
	ContentType string
	Earnings    *shared.Earnings
	Error       *shared.Error
	StatusCode  int64
}
