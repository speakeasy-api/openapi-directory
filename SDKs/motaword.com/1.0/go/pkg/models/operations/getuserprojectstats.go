package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserProjectStatsPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type GetUserProjectStatsSecurity struct {
	MwoAuth shared.SchemeMwoAuth `security:"scheme,type=oauth2"`
}

type GetUserProjectStatsRequest struct {
	PathParams GetUserProjectStatsPathParams
	Security   GetUserProjectStatsSecurity
}

type GetUserProjectStatsResponse struct {
	ClientProjectStats *shared.ClientProjectStats
	ContentType        string
	Error              *shared.Error
	StatusCode         int64
}
