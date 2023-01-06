package operations

import (
	"openapi/pkg/models/shared"
)

type GetCaptionsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetCaptionsQueryParams struct {
	SpeakerChannel *int64 `queryParam:"style=form,explode=true,name=speaker_channel"`
}

type GetCaptionsHeaders struct {
	Accept *shared.AcceptCaptionEnum `header:"style=simple,explode=false,name=Accept"`
}

// GetCaptions404ApplicationProblemPlusJSON
// Problem details object returned on errors
type GetCaptions404ApplicationProblemPlusJSON struct {
	Status *int64  `json:"status,omitempty"`
	Title  *string `json:"title,omitempty"`
	Type   *string `json:"type,omitempty"`
}

// GetCaptions405ApplicationProblemPlusJSON
// Problem details object returned on errors
type GetCaptions405ApplicationProblemPlusJSON struct {
	Detail *string `json:"detail,omitempty"`
}

// GetCaptions406ApplicationProblemPlusJSON
// Problem details object returned on errors
type GetCaptions406ApplicationProblemPlusJSON struct {
	AllowedValues []string `json:"allowed_values,omitempty"`
	CurrentValue  *string  `json:"current_value,omitempty"`
	Detail        *string  `json:"detail,omitempty"`
}

// GetCaptions409ApplicationProblemPlusJSON
// Problem details object returned on errors
type GetCaptions409ApplicationProblemPlusJSON struct {
	AllowedValues []string `json:"allowed_values,omitempty"`
	CurrentValue  *string  `json:"current_value,omitempty"`
	Detail        *string  `json:"detail,omitempty"`
}

type GetCaptionsRequest struct {
	PathParams  GetCaptionsPathParams
	QueryParams GetCaptionsQueryParams
	Headers     GetCaptionsHeaders
}

type GetCaptionsResponse struct {
	Body                                           []byte
	ContentType                                    string
	GetCaptions401ApplicationProblemPlusJSONAny    *interface{}
	GetCaptions404ApplicationProblemPlusJSONObject *GetCaptions404ApplicationProblemPlusJSON
	GetCaptions405ApplicationProblemPlusJSONObject *GetCaptions405ApplicationProblemPlusJSON
	GetCaptions406ApplicationProblemPlusJSONObject *GetCaptions406ApplicationProblemPlusJSON
	GetCaptions409ApplicationProblemPlusJSONObject *GetCaptions409ApplicationProblemPlusJSON
	StatusCode                                     int64
}
