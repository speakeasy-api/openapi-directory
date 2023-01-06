package operations

import (
	"openapi/pkg/models/shared"
)

type GetAnalyticsTokenPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetAnalyticsTokenRequest struct {
	PathParams GetAnalyticsTokenPathParams
}

type GetAnalyticsTokenResponse struct {
	AnalyticsToken *shared.AnalyticsToken
	ContentType    string
	StatusCode     int64
}
