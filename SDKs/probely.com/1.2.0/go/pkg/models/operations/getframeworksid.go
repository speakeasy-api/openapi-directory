package operations

import (
	"openapi/pkg/models/shared"
)

type GetFrameworksIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetFrameworksID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetFrameworksID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetFrameworksIDRequest struct {
	PathParams GetFrameworksIDPathParams
}

type GetFrameworksIDResponse struct {
	ContentType                             string
	Framework                               *shared.Framework
	StatusCode                              int64
	GetFrameworksID401ApplicationJSONObject *GetFrameworksID401ApplicationJSON
	GetFrameworksID404ApplicationJSONObject *GetFrameworksID404ApplicationJSON
}
