package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserStatsPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type GetUserStatsSecurity struct {
	MwoAuth shared.SchemeMwoAuth `security:"scheme,type=oauth2"`
}

type GetUserStatsRequest struct {
	PathParams GetUserStatsPathParams
	Security   GetUserStatsSecurity
}

type GetUserStatsResponse struct {
	ContentType string
	Error       *shared.Error
	Stats       *shared.Stats
	StatusCode  int64
}
