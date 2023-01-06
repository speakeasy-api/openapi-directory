package operations

import (
	"openapi/pkg/models/shared"
)

type GetMeConnectionsConnectionIDPathParams struct {
	ConnectionID int64 `pathParam:"style=simple,explode=false,name=connection_id"`
}

type GetMeConnectionsConnectionIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type GetMeConnectionsConnectionIDRequest struct {
	PathParams GetMeConnectionsConnectionIDPathParams
	Security   GetMeConnectionsConnectionIDSecurity
}

type GetMeConnectionsConnectionIDResponse struct {
	Connection  *shared.Connection
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
