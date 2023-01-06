package operations

import (
	"openapi/pkg/models/shared"
)

type GetEntryInfoInfoEntryGetPathParams struct {
	Entry string `pathParam:"style=simple,explode=false,name=entry"`
}

type GetEntryInfoInfoEntryGetRequest struct {
	PathParams GetEntryInfoInfoEntryGetPathParams
}

type GetEntryInfoInfoEntryGetResponse struct {
	ContentType       string
	EntryInfoResponse *shared.EntryInfoResponse
	ErrorResponse     *shared.ErrorResponse
	StatusCode        int64
}
