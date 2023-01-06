package operations

import (
	"openapi/pkg/models/shared"
)

type GetQuoteIDFromInternalIDPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetQuoteIDFromInternalID200ApplicationJSON struct {
	InternalID *int64 `json:"internal-id,omitempty"`
	PublicID   *int64 `json:"public-id,omitempty"`
}

type GetQuoteIDFromInternalIDRequest struct {
	PathParams GetQuoteIDFromInternalIDPathParams
}

type GetQuoteIDFromInternalIDResponse struct {
	ContentType                                      string
	Error                                            *shared.Error
	StatusCode                                       int64
	GetQuoteIDFromInternalID200ApplicationJSONObject *GetQuoteIDFromInternalID200ApplicationJSON
}
