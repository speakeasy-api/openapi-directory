package operations

import (
	"openapi/pkg/models/shared"
)

type GetClientProfileForPamPathParams struct {
	ClientID int64 `pathParam:"style=simple,explode=false,name=clientId"`
}

type GetClientProfileForPamRequest struct {
	PathParams GetClientProfileForPamPathParams
}

type GetClientProfileForPamResponse struct {
	ClientProfile *shared.ClientProfile
	ContentType   string
	Error         *shared.Error
	StatusCode    int64
}
