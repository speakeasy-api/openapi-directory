package operations

import (
	"openapi/pkg/models/shared"
)

type GetConnectQueryParams struct {
	ClientID     string                  `queryParam:"style=form,explode=true,name=client_id"`
	RedirectURI  string                  `queryParam:"style=form,explode=true,name=redirect_uri"`
	ResponseType shared.ResponseTypeEnum `queryParam:"style=form,explode=true,name=response_type"`
	Scope        string                  `queryParam:"style=form,explode=true,name=scope"`
	State        *string                 `queryParam:"style=form,explode=true,name=state"`
}

type GetConnectSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
	ClientID   shared.SchemeClientID   `security:"scheme,type=apiKey,subtype=query"`
}

type GetConnectRequest struct {
	QueryParams GetConnectQueryParams
	Security    GetConnectSecurity
}

type GetConnectResponse struct {
	ContentType                        string
	Error                              *shared.Error
	StatusCode                         int64
	GetConnect302ApplicationJSONString *string
}
