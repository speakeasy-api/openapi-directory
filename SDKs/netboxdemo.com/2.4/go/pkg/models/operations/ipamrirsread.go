package operations

import (
	"openapi/pkg/models/shared"
)

type IpamRirsReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamRirsReadRequest struct {
	PathParams IpamRirsReadPathParams
}

type IpamRirsReadResponse struct {
	ContentType string
	RIR         *shared.Rir
	StatusCode  int64
}
